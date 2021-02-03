-- Deploy project-otel:030-alter_table_housing to pg

BEGIN;

ALTER TABLE "housing"
ADD COLUMN "house_name" TEXT; 

COMMIT;
