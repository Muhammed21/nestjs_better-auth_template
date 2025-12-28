-- CreateEnum
CREATE TYPE "ColorSpace" AS ENUM ('HEX', 'RGB', 'HSL', 'OKLCH');

-- CreateTable
CREATE TABLE "design_systems" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "design_systems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "color_tokens" (
    "id" TEXT NOT NULL,
    "tokenId" TEXT NOT NULL,
    "tokenPath" TEXT NOT NULL,
    "rawValue" TEXT NOT NULL,
    "colorSpace" "ColorSpace" NOT NULL,
    "opacity" DOUBLE PRECISION,
    "isUsed" BOOLEAN NOT NULL DEFAULT true,
    "designSystemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "color_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "color_tokens_tokenPath_idx" ON "color_tokens"("tokenPath");

-- CreateIndex
CREATE UNIQUE INDEX "color_tokens_designSystemId_tokenId_key" ON "color_tokens"("designSystemId", "tokenId");

-- AddForeignKey
ALTER TABLE "color_tokens" ADD CONSTRAINT "color_tokens_designSystemId_fkey" FOREIGN KEY ("designSystemId") REFERENCES "design_systems"("id") ON DELETE CASCADE ON UPDATE CASCADE;
