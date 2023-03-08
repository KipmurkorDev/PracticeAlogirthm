
const supabase = require('../services/SupabaseService.js');
const  {getcredetialMockFuc}=require('../../test/helpers')
const jwt = require('jsonwebtoken');
const fs = require('fs');
const uuid = require('uuid');

const Google = require('google-auth-library');
const Apple = require('apple-signin-auth');

const fetch = require('node-fetch');
const { signJWT } = require('../services/JwtService.js');

async function generateJWT(user) {

    const data = user.data;
    //* Check which projects user can access
    const email = data.email;
    const userIdResponse = await supabase.client.from('users').select('id').eq('email', email);
    if (userIdResponse.error) throw new Error(JSON.stringify(userIdResponse));

    const userId = userIdResponse.data[0].id;


    //const projectsResponse = await supabase.client.from('projects').select('id').eq('user_id', userId);

    const collaborators = await supabase.client.from('collaborators').select('org_id').eq('user_id', userId);

    const allProjects = [];
    for (const collaborator of collaborators.data) {
        const orgProjects = await supabase.client.from('projects').select('id').eq('org_id', collaborator.org_id);
        allProjects.push(...orgProjects.data);
    }

    const projects = allProjects.map(e => e.id);

    const metadata = data.user_metadata;
    const image = metadata.picture;
    const email_verified = metadata.email_verified;
    const name = metadata.name;

    const emitter = 'Teta-Auth';

    const payload = {
        email,
        email_verified,
        projects,
        image,
        name,
        emitter
    }

    const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '100y' });

    return token;

}


async function authenticate(access_token, refresh_token) {
    // //* Check access token with supabase
    //  const res= await supabase.signInWithEmail()
    const result = await supabase.authClient.auth.api.getUser(access_token);
    console.log(result);
    //* No errors, return jwt
    if (!result.error) {
        const token = await generateJWT(result);
        return [true, token];
    }

    //* Error, token expired
    if (result.error.message.includes('token is expired')) {
        //* No refresh token, return error
        if (!refresh_token) return [false, result.error];
        //* Refresh session from token
        const session = await supabase.authClient.auth.setSession(refresh_token);
        //* Error during refresh
        if (session.error) return [false, session.error];

        //* Check access token with supabase
        const result = await supabase.authClient.auth.api.getUser(session.session.access_token);

        //* No errors, return jwt
        if (!result.error) {
            const token = await generateJWT(result);
            return [true, token];
        }

        //* Return error
        return [false, result.error];
    }

    //* Return error
    return [false, result.error];
}

async function authorize(token) {
    return jwt.verify(token, process.env.JWT_KEY);
}


//* Getting credentials from projects
async function getGoogleCredentialsFromProjectId(prj_id) {
    const res = await fetch('https://cms.teta.so:9840/auth/credentials/services/' + prj_id);
    const data =  await res.json();
            // test mock fuction
    // const data =(await getcredetialMockFuc(prj_id)).data[0]
    if(data.error) throw Error(`${data.error}`);
    return { client_id: data.g_client_id, client_secret: data.g_client_secret }
}
async function getGithubCredentialsFromProjectId(prj_id) {
    const res = await fetch('https://cms.teta.so:9840/auth/credentials/services/' + prj_id);
    const data = await res.json();
    // test mock fuction
    // const data =(await getcredetialMockFuc(prj_id)).data[0]
    return { client_id: data.gh_client_id, client_secret: data.gh_client_secret }
}
async function getTwitterCredentialsFromProjectId(prj_id) {
    const res = await fetch('https://cms.teta.so:9840/auth/credentials/services/' + prj_id);
    const data = await res.json();
        // test mock fuction
    // const data =(await getcredetialMockFuc(prj_id)).data[0]
    return { client_id: data.t_client_id, client_secret: data.t_client_secret }
}
async function getAppleCredentialsFromProjectId(prj_id) {
    const res = await fetch('https://cms.teta.so:9840/auth/credentials/services/' + prj_id);
    const data = await res.json();
            // test mock fuction
    // const data =(await getcredetialMockFuc(prj_id)).data[0]
    return { client_id: data.a_client_id, client_secret: data.a_client_secret }
}

async function getBitbucketCredentialsFromProjectId(prj_id) {
    const res = await fetch('https://cms.teta.so:9840/auth/credentials/services/' + prj_id);
    const data = await res.json();
            // test mock fuction
    // const data =(await getcredetialMockFuc(prj_id)).data[0]

    return { client_id: data.bb_client_id, client_secret: data.bb_client_secret }
}


async function getRedirectUrlFromProjectId(prj_id) {
    const res = await fetch(`https://backend.teta.so:9123/priv/${prj_id}/teta_auth_redirect_url`);
    const data = await res.text();
    return data;
}


async function googleLogin(prj_id, platform) {
    const res = await getGoogleCredentialsFromProjectId(prj_id);
    const { client_id, client_secret } = res;
    if (!client_id) return false;
    if (!client_secret) return false;
    const client = new Google.OAuth2Client({ clientId: client_id, clientSecret: client_secret });
    const authUrl = client.generateAuthUrl({
        redirect_uri: 'https://auth.teta.so/auth/google_callback',
        scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
        access_type: 'offline',
        state: prj_id + '_' + platform
    });
    return authUrl;
}
async function appleLogin(prj_id, platform) {
    const res = await getAppleCredentialsFromProjectId(prj_id);
    const { client_id, client_secret } = res;
    if (!client_id) return false;
    if (!client_secret) return false;
    const redirectUrl = encodeURI('https://auth.teta.so/auth/apple_callback');
    const authUrl = `https://appleid.apple.com/auth/authorize?response_type=code&state=${prj_id}_${platform}&client_id=${client_id}&redirect_uri=${redirectUrl}&scope=openid%20name%20email&response_mode=form_post`;
    return authUrl;
}
async function githubLogin(prj_id, platform) {
    const res = await getGithubCredentialsFromProjectId(prj_id);
    const { client_id, client_secret } = res;
    if (!client_id) return false;
    if (!client_secret) return false;
    return `https://github.com/login/oauth/authorize?client_id=${client_id}&state=${prj_id}_${platform}&provider=github`;
}
async function twitterLogin(prj_id, platform) {
    const res = await getTwitterCredentialsFromProjectId(prj_id);
    const { client_id, client_secret } = res;
    if (!client_id) return false;
    if (!client_secret) return false;
    const redirect_url = 'https://auth.teta.so/auth/twitter_callback'
    return `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_url}&scopeoffline.access&state=${prj_id}_${platform}&code_challenge=chall&code_challenge_method=plain`;
}

async function getTokenFromGoogleCode(prj_id, code) {
    const { client_id, client_secret } = await getGoogleCredentialsFromProjectId(prj_id);


    console.log('Getting code from google');
    console.log('PrjId:', prj_id)
    console.log('Code:', code)
    console.log('ClientId:', client_id)
    console.log('ClientSecret:', client_secret)


    if (!client_id) return false;
    if (!client_secret) return false;

    const client = new Google.OAuth2Client({ clientId: client_id, clientSecret: client_secret });
    return await client.getToken({ code, client_id, redirect_uri: 'https://auth.teta.so/auth/google_callback' });
}
async function getTokenFromGithubCode(prj_id, code) {
    const { client_id, client_secret } = await getGithubCredentialsFromProjectId(prj_id);

    console.log('Getting code from github');
    console.log('PrjId:', prj_id)
    console.log('Code:', code)
    console.log('ClientId:', client_id)
    console.log('ClientSecret:', client_secret)


    if (!client_id) return false;
    if (!client_secret) return false;

    const res = await fetch(`https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`, {
        method: 'POST',
        headers: {
            accept: 'application/json'
        }
    });

    const data = await res.json();

    return data;

}
async function getTokenFromTwitterCode(prj_id, code) {
    const { client_id, client_secret } = await getTwitterCredentialsFromProjectId(prj_id);


    console.log('Getting code from twitter');
    console.log('PrjId:', prj_id)
    console.log('Code:', code)
    console.log('ClientId:', client_id)
    console.log('ClientSecret:', client_secret)


    if (!client_id) return false;
    if (!client_secret) return false;

    const redirect_url = encodeURI('https://auth.teta.so/auth/twitter_callback')

    const response = await fetch(`https://api.twitter.com/2/oauth2/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            code: code,
            grant_type: "authorization_code",
            client_id: client_id,
            redirect_url: redirect_url,
            code_verifier: "chall"
        })
    });

    const responseData = await response.json();

    return responseData;
}
async function getTokenFromAppleCode(prj_id, code) {
    const { client_id, client_secret } = await getAppleCredentialsFromProjectId(prj_id);

    console.log('Getting code from apple');
    console.log('PrjId:', prj_id)
    console.log('Code:', code)
    console.log('ClientId:', client_id)
    console.log('ClientSecret:', client_secret)


    if (!client_id) return false;
    if (!client_secret) return false;

    const token = await Apple.getAuthorizationToken(code, { clientID: client_id, clientSecret: client_secret, redirectUri: 'https://auth.teta.so/auth/apple_callback' });

    return token;
}

async function getTetaJwtFromGoogleToken(access_token) {
    try {
        const dataPart = Buffer.from(access_token.split('.')[1], 'base64').toString();
        const json = JSON.parse(dataPart);
        const { email, name, locale } = json;
        const teta_token = signJWT({ name, email, locale, provider: 'google' });
        return teta_token;
    } catch (ex) {
        return false;
    }
}
async function getTetaJwtFromGitToken(access_token) {
    try {
        const res = await fetch('https://api.github.com/user', {
            headers: {
                'Authorization': 'token ' + access_token
            }
        });
        const json = await res.json();
        const { name } = json;

        const res1 = await fetch('https://api.github.com/user/emails', {
            headers: {
                'Authorization': 'token ' + access_token
            }
        });
        const json1 = await res1.json();
        const email = json1[0].email;

        const teta_token = signJWT({ name, email, locale: '', provider: 'github' });
        return teta_token;
    } catch (ex) {
        return false;
    }
}
async function getTetaJwtFromAppleToken(access_token, authData) {
    try {
        // const dataPart = Buffer.from(access_token.split('.')[1], 'base64').toString();
        // const json = JSON.parse(dataPart);
        // const { email, name, locale } = json;

        const { name, email } = authData;

        const teta_token = signJWT({ name: name.firstName + ' ' + name.lastName, email, locale: '', provider: 'apple' });
        return teta_token;
    } catch (ex) {
        return false;
    }
}




const codes = [];

function startAutoclean() {
    return setInterval(() => {
        console.log('Clearing codes...');
        const now = Date.now();
        codes = codes.filter(e => e.timestamp > now - 1000 * 60 * 10);
        console.log('Remaining', codes, 'codes');
    }, 1000 * 60 * 10);
}

function createCode(email, password) {
    fs.writeFileSync(new Date().getTime() + '.json', JSON.stringify(email, password));
    const code = uuid.v4().split('-')[1].toUpperCase();
    codes.push({ code, email, timestamp: Date.now() });
    return code;
}

function verifyCode(code, email) {
    const target = codes.find(e => e.code == code && e.email == email);
    if (!target) return false;
    codes.remove(target);
    return jwt.sign({ email }, process.env.JWT_KEY);
}

module.exports = {
    authenticate,
    authorize,

    googleLogin,
    githubLogin,
    twitterLogin,
    appleLogin,

    getBitbucketCredentialsFromProjectId,


    getTokenFromGoogleCode,
    getTokenFromGithubCode,
    getTokenFromTwitterCode,
    getTokenFromAppleCode,

    getRedirectUrlFromProjectId,
    code: {
        createCode,
        verifyCode,
        startAutoclean
    },

    getTetaJwtFromGitToken,
    getTetaJwtFromGoogleToken,
    getTetaJwtFromAppleToken,
}
const Supabase = require('@supabase/supabase-js');
const client = Supabase.createClient(process.env.SUPA_URL, process.env.SUPA_KEY);

 const getcredetialMockFuc= async(prj_id)=>{
        return await (await client.from('projects').select('*').eq('prj_id', prj_id));
}




module.exports={
    getcredetialMockFuc
}