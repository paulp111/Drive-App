D r i v e - A p p 
SQL 
\c drive - connect to drive 
\du 
CREATE USER drive WITH password 'pw';
GRANT ALL PRIVILEGES ON DATABASE drive TO drive;
GRANT USAGE ON SCHEMA public TO drive ;
GRANT ALL ON ALL TABLES IN SCHEMA public TO drive;
 
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://postgres:pw@localhost:5432/drive?schema=public"
