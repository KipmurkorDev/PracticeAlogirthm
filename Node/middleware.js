const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs=require('fs')


const fileChecker = (filename, text) => {
  const contents = fs.readFileSync(filename, 'utf-8')

  return contents.toLowerCase().includes(text.toLowerCase())
}
module.exports = function (req, res, next) {
  let token=req.headers['x-api-key']
  if(token){
    let output=fileChecker(VALID_KEYS_PATH,token)
    if(output)next()
  } 
  return res.status(401)

};
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {
  let newKey=shortid.generate()+LINE_ENDING;
  fs.appendFile('valid-keys.txt', newKey, function (err) {
    if (err) throw err;
    res.status(201).send({"apiKey":newKey})
  });
};

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URI, {
    dbName: process.env.DB_NAME
});

export const app = express();
app.use(cors());
app.use(morgan('dev'));

app.post('/duplication/:prj_id/:new_prj_id', async (req, res) => {
    try {
        // const secret = req.headers['secret-duplication'];
        // if (secret != 'c4m3r13r4!') return res.status(403).json({ error: 'Not authorized' });
        const result = await duplicateCMS(parseInt(req.params.prj_id), parseInt(req.params.new_prj_id));
        return res.json(result);
    } catch (ex) {
        return res.status(500).json({ error: ex.message });
    }
});


import { useAuth } from './middlewares/useAuth';
app.use(useAuth);

import CollectionRouter from './routes/CollectionRouter';
import DocumentRouter from './routes/DocumentRouter';

app.use('/collection', CollectionRouter);
app.use('/document', DocumentRouter);

app.use('/aya/:prj_id', express.text(), async (req, res) => {
    try {
        const result = await executeAyayaQuery(req.body, res.locals.auth, req.params.prj_id);
        return res.json(result);
    } catch (ex) {
        console.error(ex);
        return res.status(500).json({ error: ex.message });
    }
});

app.use('/aya_raw/:prj_id', express.text(), async (req, res) => {
    try {
        const result = await executeAyayaQuery(req.body, res.locals.auth, req.params.prj_id, true);
        return res.json(result);
    } catch (ex) {
        console.error(ex);
        return res.status(500).json({ error: ex.message });
    }
});

import https from 'https';
import fs from 'fs';

export const server = https.createServer({
    // cert: fs.readFileSync('/etc/letsencrypt/live/cms.teta.so/fullchain.pem'),
    // key: fs.readFileSync('/etc/letsencrypt/live/cms.teta.so/privkey.pem'),
    cert: fs.readFileSync('/Users/kipmurkoremmanuel/desktop/certs/cert.pem'),
    key: fs.readFileSync('/Users/kipmurkoremmanuel/desktop/certs/key.pem'),
}, app)

server.listen(9010, () => console.log('Listening on port 9010'));

import * as StreamService from './services/StreamService';
import { duplicateCMS } from './controllers/DuplicationController';
import { executeAyayaQuery } from './controllers/AyayaController';

StreamService.server.listen(server);



export function stop() {
    server.close();
    mongoose.disconnect();
}

