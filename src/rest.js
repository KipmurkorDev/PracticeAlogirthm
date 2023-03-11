const request = require('supertest');
const {server}=require('../src/index')

describe('Google Provider',() => {
    afterAll(async () => {server.close()});

    it('Google credetial With Invalid Prj_id', async () => {
        const res = await request(server).post('/auth/google/123/mobile');
        expect(res.status).toBe(500);
        expect(res.accepted).toBe(false);

    });
    it('Google credetial With Correct Prj_id', async () => {
        const res = await request(server).post('/auth/google/56567676/mobile');
        expect(res.status).toBe(200);
        expect(res.accepted).toBe(false);

    });
   
});
describe('Github Provider',() => {
    afterAll(async () => {server.close()});

    it('Github credetial With Invalid Prj_id', async () => {
        const res = await request(server).post('/auth/github/123/mobile');
        expect(res.status).toBe(500);
        expect(res.accepted).toBe(false);

    });
    it('Github credetial With Correct Prj_id', async () => {
        const res = await request(server).post('/auth/github/56567676/mobile');
        expect(res.status).toBe(200);
        expect(res.accepted).toBe(false);

    });
});
describe('Twitter Provider',() => {
    afterAll(async () => {server.close()});

    it('Twitter credetial With Invalid Prj_id', async () => {
        const res = await request(server).post('/auth/twitter/123/mobile');
        expect(res.status).toBe(500);
        expect(res.accepted).toBe(false);

    });
    it('Twitter credetial With Correct Prj_id', async () => {
        const res = await request(server).post('/auth/twitter/56567676/mobile');
        expect(res.status).toBe(200);
        expect(res.accepted).toBe(false);

    });
});

describe('Apple Provider',() => {
    afterAll(async () => {server.close()});

    it('Apple credetial With Invalid Prj_id', async () => {
        const res = await request(server).post('/auth/apple/123/mobile');
        expect(res.status).toBe(500);
        expect(res.accepted).toBe(false);

    });
    it('Apple credetial With Correct Prj_id', async () => {
        const res = await request(server).post('/auth/apple/56567676/mobile');
        expect(res.status).toBe(200);

    });
});

describe('Bitbucket Provider',() => {
    afterAll(async () => {server.close()});

    it('Bitbucket credetial With Invalid Prj_id', async () => {
        const res = await request(server).post('/auth/bitbucket/123/mobile');
        expect(res.status).toBe(500);
        expect(res.accepted).toBe(false);

    });
    it('Bitbucket credetial With Correct Prj_id', async () => {
        const res = await request(server).post('/auth/bitbucket/56567676/mobile');
        expect(res.status).toBe(200);
        expect(res.accepted).toBe(false);

    });
});

