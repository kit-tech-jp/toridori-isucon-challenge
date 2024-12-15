-- CreateIndex
CREATE INDEX `users_account_name_idx` ON `users`(`account_name`);

-- RenameIndex
ALTER TABLE `comments` RENAME INDEX `comments_post_id_fkey` TO `comments_post_id_idx`;

-- RenameIndex
ALTER TABLE `posts` RENAME INDEX `posts_user_id_fkey` TO `posts_user_id_idx`;
