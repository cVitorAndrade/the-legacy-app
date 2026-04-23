-- AlterTable
ALTER TABLE "identities" ADD CONSTRAINT "identities_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "identities_id_key";

-- AlterTable
ALTER TABLE "refresh_tokens_sessions" ADD CONSTRAINT "refresh_tokens_sessions_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "refresh_tokens_sessions_id_key";
