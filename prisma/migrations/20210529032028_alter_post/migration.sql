/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Post.title_unique" ON "Post"("title");
