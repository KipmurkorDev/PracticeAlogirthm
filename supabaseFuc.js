const Supabase = require('@supabase/supabase-js');
SUPA_URL = 'https://mfugshihnjhkisrqshct.supabase.co'
SUPA_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mdWdzaGlobmpoa2lzcnFzaGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwOTk4NTYsImV4cCI6MTk5MzY3NTg1Nn0.w5GftgA0tRY83Sr8g9T1NAmdGyUdMifL7hlMsGoujWc'
const client = Supabase.createClient(SUPA_URL, SUPA_KEY);

 const getcredetialMockFuc= async(prj_id)=>{
    const {data, error}=await client.rpc('add_users', {id:11, firstname:"emmanue", lastname:"kim", email:"emamanan@kieme.com",access_token:"78828288282", status:false, job:"software developer", isstudent:false, inactivity:false, deleted:false} )
    console.log(error);
}



getcredetialMockFuc()

