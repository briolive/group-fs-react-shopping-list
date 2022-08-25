-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data


CREATE TABLE groceries (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	quantity NUMERIC NOT NULL,
	unit VARCHAR(20)
);

INSERT INTO groceries (name, quantity, unit)
VALUES ('Andouille sausages', 4, 'links'),
('Heirloom tomatoes', 2, 'tomatoes'),
('Honey Bunches of Oats Cereal', 1, 'box');