CREATE DATABASE IF NOT EXISTS library;

USE library;

CREATE TABLE author(
    author_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    bio TEXT,
    INDEX name_index (name)
);

CREATE TABLE book(
    book_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description TEXT,
    author_id INT,
    pubdate DATE, 
    INDEX auth_id (author_id),
    FOREIGN KEY (author_id) REFERENCES author (author_id) ON DELETE CASCADE,
    INDEX title_index (title)
);
