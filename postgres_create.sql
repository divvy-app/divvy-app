--
-- PostgreSQL database dump
--
-- psql -d <url from elephantSQL> -f postgres_create.sql

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.user (
	"_id" serial NOT NULL,
	"username" varchar NOT NULL UNIQUE,
  "email" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.bill (
	"_id" serial NOT NULL,
  "title" varchar NOT NULL,
  "totalCost" float NOT NULL,
	"numSplit" integer NOT NULL,
	"userCost" float NOT NULL,
	"user_id" bigint NOT NULL,
	CONSTRAINT "bill_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.bill ADD CONSTRAINT "user_fk0" FOREIGN KEY ("user_id") REFERENCES public.user("_id");

select setval('public.user__id_seq', 1, false);
select setval('public.bill__id_seq', 1, false);