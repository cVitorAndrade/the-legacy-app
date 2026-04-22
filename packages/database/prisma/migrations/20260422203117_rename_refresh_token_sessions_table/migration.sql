/*
  Warnings:

  - You are about to drop the `RefreshTokenSessions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RefreshTokenSessions" DROP CONSTRAINT "RefreshTokenSessions_userId_fkey";

-- DropTable
DROP TABLE "RefreshTokenSessions";

-- CreateTable
CREATE TABLE "refresh_tokens_sessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "familyId" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_sessions_id_key" ON "refresh_tokens_sessions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_sessions_tokenHash_key" ON "refresh_tokens_sessions"("tokenHash");

-- CreateIndex
CREATE INDEX "refresh_tokens_sessions_userId_idx" ON "refresh_tokens_sessions"("userId");

-- CreateIndex
CREATE INDEX "refresh_tokens_sessions_tokenHash_idx" ON "refresh_tokens_sessions"("tokenHash");

-- CreateIndex
CREATE INDEX "refresh_tokens_sessions_familyId_idx" ON "refresh_tokens_sessions"("familyId");

-- AddForeignKey
ALTER TABLE "refresh_tokens_sessions" ADD CONSTRAINT "refresh_tokens_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
