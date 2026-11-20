/*
  Warnings:

  - Added the required column `genreId` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `song` ADD COLUMN `genreId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Song` ADD CONSTRAINT `Song_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
