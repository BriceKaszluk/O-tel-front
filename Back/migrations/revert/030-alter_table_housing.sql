-- Revert project-otel:030-alter_table_housing from pg

BEGIN;

ALTER TABLE "housing" 
DROP COLUMN "house_name"; 

COMMIT;
