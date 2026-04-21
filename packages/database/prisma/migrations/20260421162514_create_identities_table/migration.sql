-- CreateTable
CREATE TABLE "identities" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "identities_id_key" ON "identities"("id");

-- CreateIndex
CREATE UNIQUE INDEX "identities_provider_providerId_key" ON "identities"("provider", "providerId");

-- CreateIndex
CREATE UNIQUE INDEX "identities_userId_provider_key" ON "identities"("userId", "provider");

-- AddForeignKey
ALTER TABLE "identities" ADD CONSTRAINT "identities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
