const Supabase = require('@supabase/supabase-js');
SUPA_URL = 'https://mfugshihnjhkisrqshct.supabase.co'
SUPA_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mdWdzaGlobmpoa2lzcnFzaGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwOTk4NTYsImV4cCI6MTk5MzY3NTg1Nn0.w5GftgA0tRY83Sr8g9T1NAmdGyUdMifL7hlMsGoujWc'
const client = Supabase.createClient(SUPA_URL, SUPA_KEY);

 const getcredetialMockFuc= async(prj_id)=>{
    const {data, error}=await client.rpc('add_user', {firstname:"emmanue", lastname:"kim", user_email:"emamanan@gmail.com",access_token:"78828288282", status:'kim8', job:"software developer", isstudent:false, inactivity:1, deleted:false} )
    console.log(data);
}

getcredetialMockFuc()




