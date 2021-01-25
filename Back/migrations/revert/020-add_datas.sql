-- Revert project-otel:020-add_datas from pg

BEGIN;

TRUNCATE TABLE "notice", "booking", "housing", "user", "role" RESTART IDENTITY;

COMMIT;
