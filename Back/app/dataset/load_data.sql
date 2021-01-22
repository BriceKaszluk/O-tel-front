BEGIN;

TRUNCATE TABLE "role", "user", "housing", "booking", "notice" RESTART IDENTITY;

INSERT INTO "role" ("id", "label") 
OVERRIDING SYSTEM VALUE 
VALUES (1, 'user');

INSERT INTO "user" ("first_name", "last_name", "address", "email", "phone_number", "password", "role_id") VALUES ('michel', 'michelmichel', '15 rue du four 00000 ville', 'mich@gmail.com', '012345678', 'abcdefgh', 1);

INSERT INTO "housing" ("description", "place_number", "price", "picture") VALUES ('Lorem Ipsum is simply dummy text of the printing and typesetting industry', 4, 250, 'img.png');;

INSERT INTO "booking" ("begining_date",  "ending_date", "housing_id", "user_id") VALUES ('2021-01-21', '2021-01-24', 1, 1);

INSERT INTO "notice" ("comments", "rate", "housing_id", "user_id") VALUES ('Lorem ipsum dolor sit amet, consectetur adipiscing elit', 4, 1, 1);

COMMIT;