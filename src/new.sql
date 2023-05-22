

Create or Replace function add_user(firstname varchar,lastname varchar,user_email varchar, access_token varchar, status varchar, job varchar, isstudent boolean,inactivity int, deleted boolean) 
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
  INSERT INTO public.users ("firstName","lastName",email,access_token, status, job, "isStudent",inactivity, deleted) 
  VALUES(firstname,lastname,user_email, access_token, status, job, isstudent,inactivity, deleted );
  return 'User added successffully';
ELSE
  return 'User Already exist';
END IF;
END
$$ 