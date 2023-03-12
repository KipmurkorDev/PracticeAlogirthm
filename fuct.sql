Create or Replace function add_user(id int,firstname text,lastname text,user_email varchar, access_token text, status boolean, job text, isStudent boolean,inactivity boolean, deleted boolean) 
returns text
language plpgsql
AS 
$$
DECLARE 
user_exist int;
BEGIN 
select count(*) into user_exist from public.users where email = user_email;
IF(user_exist=0)
THEN
  INSERT INTO public.users (id,"firstName","lastName",email,access_token, status, job, "isStudent",inactivity, deleted) 
  VALUES(id,firstName,lastName,user_email, access_token, status, job, isStudent,inactivity, deleted );
  return 'User added successffully';
ELSE
  return 'User Already exist';
END IF;
END
$$ 