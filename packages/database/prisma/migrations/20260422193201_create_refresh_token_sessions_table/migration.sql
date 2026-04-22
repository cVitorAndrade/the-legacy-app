-- CreateTable
CREATE TABLE "RefreshTokenSessions" (
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
CREATE UNIQUE INDEX "RefreshTokenSessions_id_key" ON "RefreshTokenSessions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshTokenSessions_tokenHash_key" ON "RefreshTokenSessions"("tokenHash");

-- CreateIndex
CREATE INDEX "RefreshTokenSessions_userId_idx" ON "RefreshTokenSessions"("userId");

-- CreateIndex
CREATE INDEX "RefreshTokenSessions_tokenHash_idx" ON "RefreshTokenSessions"("tokenHash");

-- CreateIndex
CREATE INDEX "RefreshTokenSessions_familyId_idx" ON "RefreshTokenSessions"("familyId");

-- AddForeignKey
ALTER TABLE "RefreshTokenSessions" ADD CONSTRAINT "RefreshTokenSessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
