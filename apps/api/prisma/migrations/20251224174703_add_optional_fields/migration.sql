-- AlterTable
ALTER TABLE "color_tokens" ALTER COLUMN "hexValue" DROP NOT NULL,
ALTER COLUMN "hslValue" DROP NOT NULL,
ALTER COLUMN "oklchValue" DROP NOT NULL,
ALTER COLUMN "rgbValue" DROP NOT NULL;

-- DropEnum
DROP TYPE "ColorSpace";
