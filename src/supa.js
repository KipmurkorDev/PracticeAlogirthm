const dotenv = require('dotenv');
dotenv.config();

const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(morgan('tiny'));



app.use((req, res, next) => {
    if (req.hostname == 'teta.io') return res.redirect('https://teta.so')
    next();
})

const AuthRouter = require('./routes/AuthRouter.js');
app.use('/auth', AuthRouter);


app.use(express.static('static'));


const authTetaCredentials = {
    cert: fs.readFileSync('/etc/letsencrypt/live/auth.teta.so/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/auth.teta.so/privkey.pem')
}

const redirectCredentials = {
    cert: fs.readFileSync('/etc/letsencrypt/live/teta.io/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/teta.io/privkey.pem')
}

const server = https.createServer({
    cert: fs.readFileSync('/etc/letsencrypt/live/auth.teta.so/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/auth.teta.so/privkey.pem')
}, app);

server.addContext('teta.io', redirectCredentials);

server.listen(443, () => console.log('Listening on 443'));


const fetch = require('node-fetch');

const { getBitbucketCredentialsFromProjectId } = require('../AuthController.js');

async function bitbucketLogin(prj_id, platform) {
    const credentials = await getBitbucketCredentialsFromProjectId(prj_id);

    const { client_id, client_secret } = credentials;
    if (!client_id) return false;
    if (!client_secret) return false;
    const authUrl = `https://bitbucket.org/site/oauth2/authorize?client_id=${client_id}&response_type=code&state=${prj_id}_${platform}`;
    return authUrl;
}

async function getTokenFromBitbucketCode(prj_id, code) {
    console.log('BITBUCKET', { prj_id, code });

    const credentials = await getBitbucketCredentialsFromProjectId(prj_id);

    const req = await fetch(`https://bitbucket.org/site/oauth2/access_token`, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${Buffer.from(credentials.client_id + ':' + credentials.client_secret).toString('base64')}`,
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code
        })
    });
    const data = await req.json();
    console.log('BITBUCKET', data);

    return data;
}

module.exports = {
    bitbucketLogin,
    getTokenFromBitbucketCode
}

const { Router, json, text } = require('express');
const { authenticate, authorize, googleLogin, getTokenFromGoogleCode, getTokenFromGithubCode, githubLogin, getRedirectUrlFromProjectId, getTetaJwtFromGitToken, getTetaJwtFromGoogleToken, twitterLogin, getTokenFromTwitterCode, getTokenFromAppleCode, appleLogin, getTetaJwtFromAppleToken } = require('../controllers/AuthController.js');

const formidable = require('express-formidable');

const supa = require('../services/SupabaseService.js');
const { bitbucketLogin, getTokenFromBitbucketCode } = require('../controllers/providers/bitbucket.js');

const router = Router();


router.post('/', json(), async (req, res) => {
    try {
        const { access_token, refresh_token } = req.body;
        const result = await authenticate(access_token, refresh_token);
        return res.json(result);
    } catch (ex) {
        console.error(ex);
        return res.status(500).json({ error: ex.message });
    }
});

router.get('/verify/:token', json(), async (req, res) => {
    try {
        const result = await authorize(token);
        return res.json(result);
    } catch (ex) {
        return res.status(500).json({ error: ex.message });
    }
});


//* Posting credentials



router.post('/google/:prj_id/:platform', async (req, res) => {
    try {
        if (!req.params.prj_id) return res.status(400).json({ error: 'prj_id is required' });
        const result = await googleLogin(req.params.prj_id, req.params.platform);
        return res.status(200).send(result);
    } catch (ex) {
        return res.status(500).json({ error: ex.message });
    }
});

router.post('/github/:prj_id/:platform', async (req, res) => {
    try {
        if (!req.params.prj_id) return res.status(400).json({ error: 'prj_id is required' });
        const result = await githubLogin(req.params.prj_id, req.params.platform);
        return res.status(200).send(result);
    } catch (ex) {
        return res.status(500).json({ error: ex.message });
    }
});

router.post('/twitter/:prj_id/:platform', async (req, res) => {
    try {
        if (!req.params.prj_id) return res.status(400).json({ error: 'prj_id is required' });
        const result = await twitterLogin(req.params.prj_id, req.params.platform);
        return res.status(200).send(result);
    } catch (ex) {
        return res.status(500).json({ error: ex.message });
    }
});

router.post('/apple/:prj_id/:platform', async (req, res) => {
    try {
        if (!req.params.prj_id) return res.status(400).json({ error: 'prj_id is required' });
        const result = await appleLogin(req.params.prj_id, req.params.platform);
        return res.status(200).send(result);
    } catch (ex) {
        return res.status(500).json({ error: ex.message });
    }
});

router.post('/bitbucket/:prj_id/:platform', async (req, res) => {
    try {
        if (!req.params.prj_id) return res.status(400).json({ error: 'prj_id is required' });
        const result = await bitbucketLogin(req.params.prj_id, req.params.platform);
        return res.status(200).send(result);
    } catch (ex) {
        return res.status(500).json({ error: ex.message });
    }
});





router.post('/twitch/:prj_id/:platform', async (req, res) => {
    try {
        if (!req.params.prj_id) return res.status(400).json({ error: 'prj_id is required' });
        return res.status(400).json({ error: 'TWITCH application needs to be updated.' })
        const result = await bitbucketLogin(req.params.prj_id, req.params.platform);
        return res.status(200).send(result);
    } catch (ex) {
        return res.status(500).json({ error: ex.message });
    }
});

router.post('/linkedin/:prj_id/:platform', async (req, res) => {
    try {
        if (!req.params.prj_id) return res.status(400).json({ error: 'prj_id is required' });
        return res.status(400).json({ error: 'LINKEDIN application needs to be updated.' })
        const result = await bitbucketLogin(req.params.prj_id, req.params.platform);
        return res.status(200).send(result);
    } catch (ex) {
        return res.status(500).json({ error: ex.message });
    }
});

router.post('/discord/:prj_id/:platform', async (req, res) => {
    try {
        if (!req.params.prj_id) return res.status(400).json({ error: 'prj_id is required' });
        return res.status(400).json({ error: 'DISCORD application needs to be updated.' })
        const result = await bitbucketLogin(req.params.prj_id, req.params.platform);
        return res.status(200).send(result);
    } catch (ex) {
        return res.status(500).json({ error: ex.message });
    }
});


router.post('/gitlab/:prj_id/:platform', async (req, res) => {
    try {
        if (!req.params.prj_id) return res.status(400).json({ error: 'prj_id is required' });
        return res.status(400).json({ error: 'GITLAB application needs to be updated.' })
        const result = await bitbucketLogin(req.params.prj_id, req.params.platform);
        return res.status(200).send(result);
    } catch (ex) {
        return res.status(500).json({ error: ex.message });
    }
});




router.get('/github_callback', text(), async (req, res) => {
    try {
        const code = req.query.code;

        const [prj_id, platform] = req.query.state.split('_');

        console.log('---- REQUEST ----');
        console.log('Code', decodeURI(code));
        console.log('PrjId', decodeURI(prj_id));
        console.log('Url', req.originalUrl);
        console.log('Body', req.body);
        const token = await getTokenFromGithubCode(decodeURI(prj_id), decodeURI(code));
        console.log('Token', token.access_token);
        const teta_token = await getTetaJwtFromGitToken(token.access_token);
        return onLoginCallback(teta_token, prj_id, platform, res);

    } catch (ex) {
        console.error(ex);
        res.status(500).json({ error: ex.message });
    }
});

router.get('/google_callback', text(), async (req, res) => {
    try {

        // if (req.query.access_token) {
        //     const teta_token = await getTetaJwtFromGoogleToken(req.query.access_token);
        //     return onLoginCallback(teta_token, prj_id, platform, res);
        // }

        const code = req.query.code;
        if (!req.query.state) throw Error('No state in google response');
        const [prj_id, platform] = req.query.state.split('_');
        const token = await getTokenFromGoogleCode(decodeURI(prj_id), decodeURI(code));
        const teta_token = await getTetaJwtFromGoogleToken(token.tokens.id_token);
        return onLoginCallback(teta_token, prj_id, platform, res);
    } catch (ex) {
        console.error(ex);
        res.status(500).json({ error: ex.message });
    }
});

router.get('/twitter_callback', text(), async (req, res) => {
    try {
        const code = req.query.code;
        const [prj_id, platform] = req.query.state.split('_');
        console.log('---- REQUEST ----');
        console.log('Code', decodeURI(code));
        console.log('PrjId', decodeURI(prj_id));
        console.log('Url', req.originalUrl);
        console.log('Body', req.body);
        const token = await getTokenFromTwitterCode(decodeURI(prj_id), decodeURI(code));
        res.json({ result: token });
        return;
        console.log('Token', token.tokens.id_token);
        const teta_token = await getTetaJwtFromGoogleToken(token.tokens.id_token);
        return onLoginCallback(teta_token, prj_id, platform, res);
    } catch (ex) {
        console.error(ex);
        res.status(500).json({ error: ex.message });
    }
});

router.post('/apple_callback', formidable(), async (req, res) => {
    try {
        const code = req.fields.code;
        const state = req.fields.state;

        const authData = JSON.parse(req.fields.user || '{}');

        if (!state) throw Error('No state in apple response');
        if (!code) throw Error('No code in apple response');

        const [prj_id, platform] = state.split('_');
        const token = await getTokenFromAppleCode(decodeURI(prj_id), decodeURI(code));
        console.log(token);
        const teta_token = await getTetaJwtFromAppleToken(token.tokens, authData);
        return onLoginCallback(teta_token, prj_id, platform, res);
    } catch (ex) {
        console.error(ex);
        res.status(500).json({ error: ex.message });
    }
});

router.get('/bitbucket_callback', formidable(), async (req, res) => {
    try {
        const code = req.query.code;
        const [prj_id, platform] = req.query.state.split('_');

        // const authData = JSON.parse(req.fields.user || '{}');

        if (!prj_id || !platform) throw Error('No state in bitbucket response');
        if (!code) throw Error('No code in bitbucket response');

        // const [prj_id, platform] = state.split('_');
        const token = await getTokenFromBitbucketCode(decodeURI(prj_id), decodeURI(code));
        console.log(token);
        res.json(token);
        // return onLoginCallback(teta_token, prj_id, platform, res);
    } catch (ex) {
        console.error(ex);
        res.status(500).json({ error: ex.message });
    }
});

async function onLoginCallback(token, prj_id, platform, res) {
    if (platform == 'web') {

        return res.send(`
        <html>
        <head></head>
        <body>
            <script>
                console.log('Initializing...');
                setTimeout(()=>{
                    opener.postMessage('${token}','*');
                },1000);

            </script>
        </body>
        </html>
        `);

    } else if (platform == 'mobile') {
        const redirect = await getRedirectUrlFromProjectId(decodeURI(prj_id));
        return res.redirect(redirect + '?access_token=' + encodeURI(token));
    } else if (platform == 'mobile_redirect_teta') {
        const redirect = await getRedirectUrlFromProjectId(decodeURI(prj_id));
        return res.redirect('so.teta.app' + '?access_token=' + encodeURI(token) + '&project_redirect=' + redirect);
    } else {
        return res.json({ error: 'Target platform not found' })
    }
}

module.exports = router;