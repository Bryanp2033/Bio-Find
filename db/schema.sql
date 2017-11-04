### Schema
-- -----------------------------------------------------
-- Schema History
-- -----------------------------------------------------

-- Use database
USE 'History';

-- Users Table
CREATE TABLE IF NOT EXISTS `users`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(55),
    `password` VARCHAR(35),
    `last_active` DATE,
    PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `historyData`(
    `article_id` INT(11),
    `full_name` VARCHAR(255),
    `sex` VARCHAR(255),
    `birth_year` INT(11),
    `city` VARCHAR(255),
    `state` VARCHAR(255),
    `country` VARCHAR(255),
    `continent` VARCHAR(255),
    `latitude` VARCHAR(255),
    `longitude` VARCHAR(255),
    `occupation` VARCHAR(255),
    `industry` VARCHAR(255),
    `domain` VARCHAR(255),
    `article_languages` INT(11),
    `page_views` BIGINT(11),
    `average_views` INT(11),
    `historical_popularity_index` VARCHAR(255)
    PRIMARY KEY(`article_id`)
)


CREATE TABLE IF NOT EXISTS `UserstoHistory`(
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `historyData_article_id` INT NOT NULL,
    `users_id` INT NOT NULL,
    PRIMARY KEY(`id`)
)






