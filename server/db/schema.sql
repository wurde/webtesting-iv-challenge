BEGIN TRANSACTION;

CREATE TABLE `posts` (
  `id` integer not null primary key autoincrement,
  `title` text not null,
  `content` text,
  `created_at` datetime not null default CURRENT_TIMESTAMP,
  `updated_at` datetime not null default CURRENT_TIMESTAMP
);

COMMIT TRANSACTION;
