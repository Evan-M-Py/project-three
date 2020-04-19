-- DROP DATABASE cruisineDB;

CREATE DATABASE cruisineDB;

USE cruisineDB;

CREATE TABLE users (
	user_id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(45) NOT NULL,
    user_name VARCHAR(30) NOT NULL, 
    user_pass VARCHAR(30) NOT NULL,
    truck_id INT NOT NULL, 
    PRIMARY KEY (user_id)
);

ALTER TABLE users
ADD FOREIGN KEY (truck_id) REFERENCES trucks(truck_id);

CREATE TABLE trucks(
	truck_id INT NOT NULL AUTO_INCREMENT,
    truck_name VARCHAR(60) NOT NULL,
    user_id INT NOT NULL, 
    PRIMARY KEY (truck_id)
);

ALTER TABLE trucks
ADD FOREIGN KEY (user_id) REFERENCES users(user_id);

CREATE TABLE inventory(
	inv_id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(60) NOT NULL,
    cateogry VARCHAR(15) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    truck_id INT NOT NULL, 
    PRIMARY KEY (inv_id)
);

ALTER TABLE inventory
ADD FOREIGN KEY (truck_id) REFERENCES trucks(truck_id);

CREATE TABLE expenses(
	exp_id INT NOT NULL AUTO_INCREMENT,
    expense_name VARCHAR(60) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    category VARCHAR(30) NOT NULL,
    truck_id INT NOT NULL, 
    PRIMARY KEY (exp_id)
);

ALTER TABLE expenses
ADD FOREIGN KEY (truck_id) REFERENCES trucks(truck_id);

CREATE TABLE todo(
	todo_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    body VARCHAR(90) NOT NULL,
    complete BOOLEAN NOT NULL,
    user_id INT NOT NULL, 
    truck_id INT NOT NULL, 
    PRIMARY KEY (todo_id)
);

ALTER TABLE todo
ADD FOREIGN KEY (truck_id) REFERENCES trucks(truck_id);

ALTER TABLE todo
ADD FOREIGN KEY (user_id) REFERENCES users(user_id);