D r i v e - A p p 
SQL 
\c drive - connect to drive 
\du 
CREATE USER drive WITH password 'pw';
GRANT ALL PRIVILEGES ON DATABASE drive TO drive;
GRANT USAGE ON SCHEMA public TO drive ;
GRANT ALL ON ALL TABLES IN SCHEMA public TO drive;
 
