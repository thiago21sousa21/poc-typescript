CREATE TABLE "movies" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"title" varchar(50) NOT NULL UNIQUE,
	"description" varchar(250),
	"status" BOOLEAN NOT NULL DEFAULT 'false'
);





