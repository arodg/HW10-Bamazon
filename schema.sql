DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;


CREATE TABLE products (
  item_id INT(6) NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(12) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(6) NOT NULL
 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES 
	("11", "Fitbit Watch", "Fitness", "74.50", "1500"),
	("22", "Peloton Bike", "Fitness", "1995.00", "60"),
	("31", "Soda Stream", "Dining", "79.99", "250"),
	("44", "Small Copier", "OFfice", "54.99", "170"),
	("57", "Disposable Camera", "Camera", "9.52", "350"),
	("63", "4-Person Tent", "Sports", "149.99", "55"),
	("68", "Bluetooth Headphones", "Electronics", "27.99", "780"),
	("79", "Hair Straightener", "Beauty", "99.99", "500"),
	("84", "Pre-lit Christmas Tree", "Home", "299.99", "920"),
	("92", "82 Inch TV", "Electronics", "4999.95", "3");

