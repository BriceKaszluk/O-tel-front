-- Deploy project-otel:010-init to pg

-- this file is used to create the tables for the project
-- I had to add double quotes, because these are words reserved for PSQL


BEGIN;

CREATE TABLE "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "label" TEXT NOT NULL
);

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL, 
    "address" TEXT NULL,
    "email" TEXT NOT NULL UNIQUE, 
    "phone_number" TEXT, 
    "password" TEXT NOT NULL, 
    "role_id" INT REFERENCES "role"("id")
);

CREATE TABLE "housing" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "description" TEXT NOT NULL,
    "place_number" INT NOT NULL,  
    "price" INTEGER NOT NULL, 
    "picture" TEXT NOT NULL
); 

CREATE TABLE "booking" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "begining_date" DATE NOT NULL,
    "ending_date" DATE NOT NULL, 
    "housing_id" INT REFERENCES "housing"("id"), 
    "user_id" INT REFERENCES "user"("id")
);

CREATE TABLE "notice" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "comments" TEXT NOT NULL, 
    "rate" INT NOT NULL, 
    "housing_id" INT REFERENCES "housing"("id"),
    "user_id" INT REFERENCES "user"("id")
);

COMMIT;
