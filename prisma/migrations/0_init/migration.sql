-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL,
    "first_name" VARCHAR NOT NULL,
    "last_name" VARCHAR NOT NULL,
    "nic" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "birth_date" TIMESTAMP(6) NOT NULL,
    "user_image" VARCHAR,
    "id_role" INTEGER NOT NULL,
    "id_user_status" INTEGER NOT NULL,
    "id_country" INTEGER NOT NULL,
    "created_on" TIMESTAMP(6) NOT NULL,
    "created_by" INTEGER NOT NULL,
    "last_modified_on" TIMESTAMP(6),
    "last_modified_by" INTEGER,

    CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id")
);

