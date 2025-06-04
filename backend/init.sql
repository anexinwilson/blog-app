-- Table: public.blogs

-- DROP TABLE IF EXISTS public.blogs;

CREATE TABLE IF NOT EXISTS public.blogs
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    title character varying COLLATE pg_catalog."default" NOT NULL,
    image character varying COLLATE pg_catalog."default",
    post text COLLATE pg_catalog."default",
    createdon timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    category character varying COLLATE pg_catalog."default",
    CONSTRAINT blogs_pk PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.blogs
    OWNER to postgres;