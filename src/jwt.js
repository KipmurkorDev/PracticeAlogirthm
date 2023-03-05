
const jwt = require('jsonwebtoken');

function signJWT(data) {
    return jwt.sign(data, process.env.JWT_KEY, { expiresIn: '7d' });
}


module.exports = {
    signJWT
}
const Supabase = require('@supabase/supabase-js');

const client = Supabase.createClient(process.env.SUPA_URL, process.env.SUPA_KEY);

const authClient = Supabase.createClient(process.env.SUPA_URL, process.env.SUPA_KEY);

module.exports = {
    client,
    authClient
};