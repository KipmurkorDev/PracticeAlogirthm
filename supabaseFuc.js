const Supabase = require('@supabase/supabase-js');
SUPA_URL = 'https://mfugshihnjhkisrqshct.supabase.co'
SUPA_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mdWdzaGlobmpoa2lzcnFzaGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwOTk4NTYsImV4cCI6MTk5MzY3NTg1Nn0.w5GftgA0tRY83Sr8g9T1NAmdGyUdMifL7hlMsGoujWc'
const client = Supabase.createClient(SUPA_URL, SUPA_KEY);

 const getcredetialMockFuc= async(prj_id)=>{
    const {data, error}=await client.rpc('add_user', {firstname:"emmanue", lastname:"kim", user_email:"emamanan@gmail.com",access_token:"78828288282", status:'kim8', job:"software developer", isstudent:false, inactivity:1, deleted:false} )
    console.log(data);
}

getcredetialMockFuc()




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
