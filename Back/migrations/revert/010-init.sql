-- Revert project-otel:010-init from pg

-- this file is used to drop the tables for the project
-- I had to add quotes, because these are words reserved for psql

BEGIN;

DROP TABLE notice;
DROP TABLE booking;
DROP TABLE housing;
DROP TABLE "user";
DROP TABLE "role";

COMMIT;
