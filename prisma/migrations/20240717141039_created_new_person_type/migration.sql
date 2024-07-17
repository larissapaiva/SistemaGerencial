/*
  Warnings:

  - A unique constraint covering the columns `[document]` on the table `clients` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "PersonType" ADD VALUE 'OFFSHORE';

-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "document" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "clients_document_key" ON "clients"("document");
