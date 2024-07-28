/*
  Warnings:

  - You are about to drop the column `imageURL` on the `task` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task" DROP COLUMN "imageURL",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
