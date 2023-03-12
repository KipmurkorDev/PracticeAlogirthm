create or replace function add_users(id int,firstName text,lastName text,email text, access_token text, status boolean, job text, isStudent boolean,inactivity boolean, deleted boolean) 
returns text
language plpgsql
AS 
$$
BEGIN 
  INSERT INTO public.users (id,"firstName","lastName",email,access_token, status, job, "isStudent",inactivity, deleted) 
  VALUES(id,firstName,lastName,email, access_token, status, job, isStudent,inactivity, deleted );
  return 'User added successffully';
     
END

$$ 