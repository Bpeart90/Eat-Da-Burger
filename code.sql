CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL	AUTO_INCREMENT,
	name varchar (255) NOT NULL,
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY	(id)
);
select * from burgers;
INSERT INTO burgers (name) VALUES ('Hamburger');
INSERT INTO burgers (name) VALUES ('Cheeseburger');
INSERT INTO burgers (name, devour) VALUES ('Double Hamburger', true);
INSERT INTO burgers (name, devour) VALUES ('Turkey Burger', true);
INSERT INTO burgers (name, devour) VALUES ('Pork Burger', true);
INSERT INTO burgers (name) VALUES ('Chicken Pattie');