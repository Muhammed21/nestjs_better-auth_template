/*
  Warnings:

  - You are about to drop the column `colorSpace` on the `color_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `isUsed` on the `color_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `opacity` on the `color_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `rawValue` on the `color_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `design_systems` table. All the data in the column will be lost.
  - Added the required column `hexValue` to the `color_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hslValue` to the `color_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oklchValue` to the `color_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rgbValue` to the `color_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "color_tokens" DROP COLUMN "colorSpace",
DROP COLUMN "isUsed",
DROP COLUMN "opacity",
DROP COLUMN "rawValue",
ADD COLUMN     "hexValue" TEXT NOT NULL,
ADD COLUMN     "hslValue" TEXT NOT NULL,
ADD COLUMN     "oklchValue" TEXT NOT NULL,
ADD COLUMN     "rgbValue" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "design_systems" DROP COLUMN "description";
