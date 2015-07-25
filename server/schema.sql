CREATE DATABASE chat;

USE chat;

create table rooms (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roomname VARCHAR(20)
);

create table users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20)
);

create table messages (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(160),
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  FOREIGN KEY fk_user(user_id)
  REFERENCES users(id),
  FOREIGN KEY fk_room(room_id)
  REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

