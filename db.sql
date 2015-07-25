
create table users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20)
);

create table rooms (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20)
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

