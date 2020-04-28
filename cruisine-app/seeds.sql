INSERT INTO users (email, user_name, user_pass)
VALUES
('ryan@gmail.com', 'al1vemau5', 'b00ts4ndc4ts'),
('zac@gmail.com','zace118', 'alligator1'),
('evan@gmail.com', 'pylarplum', 'passwerd');

-- SELECT * FROM users;

INSERT INTO trucks (truck_name)
VALUES
("Turnips & 'booch"),
("EZ's Grilled CheEZ's"),
("The AZ Burger Bus");

-- SELECT * FROM trucks;

-- Categories
-- -- Breads/Grains
-- -- Dairy
-- -- Fruits
-- -- Veggies
-- -- Meats
-- -- Spices
-- -- Desserts
-- -- Beverages

INSERT INTO inventory (item_name, category, quantity, price)
VALUES
("Tomatoes - Roma", "Veggies", 50, 25.00), 
("Turnips", "Veggies", 25, 25.00), 
("Beets - Red", "Veggies", 25, 25.00), 
("Carrots", "Veggies", 25, 30.00), 
("Peas", "Veggies", 20, 10.00), 
("Ginger", "Veggies", 5, 30.00), 
("Broccoli", "Veggies", 20, 25.00), 
("Cauliflower", "Veggies", 15, 30.00),
("Rice - White", "Breads/Grains", 50, 40.00),
("Chicken", "Meats", 150, 180.00), 
("Kosher Salt", "Spices", 25, 15.00), 
("Black Peppercorns", "Spices", 5, 45.00), 
("Sugar", "Spices", 50, 45.00), 
("Oil - EVOO", "Spices", 5, 175.00), 
("Kombucha", "Beverages", 50, 150.00);


INSERT INTO inventory (item_name, category, quantity, price)
VALUES
("Sourdough - Loaf", "Breads/Grains", 4, 65.00),
("White - Loaf", "Breads/Grains", 4, 65.00),
("Wheat - Loaf", "Breads/Grains", 4, 65.00),
("Butter", "Dairy", 25, 50.00),
("Cheese - Sharp White Cheddar", "Dairy", 40, 45.00),
("Cheese - Swiss", "Dairy", 40, 45.00),
("Cheese - American", "Dairy", 40, 45.00),
("Cheese - Muenster", "Dairy", 40, 45.00),
("Cheese - Medium Sharp Yellow Cheddar", "Dairy", 40, 45.00),
("Onions - White", "Veggies", 40, 45.00), 
("Beef - Roast", "Meat", 40, 45.00),
("Kosher Salt", "Spices", 25, 15.00),
("Black Peppercorns", "Spices", 5, 45.00),
("Garlic Powder", "Spices", 5, 45.00),
("Onion Powder", "Spices", 5, 45.00),
("Cayenne", "Spices", 1, 15.00),
("Oil - EVOO", "Spices", 5, 175.00);

INSERT INTO inventory (item_name, category, quantity, price)
VALUES
("Brioche -Burger Buns", "Breads/Grains", 50, 70.00),
("Butter", "Dairy", 25, 50.00),
("Pineapple", "Fruits", 12, 25.00),
("Apples", "Fruits", 26, 45.00),
("Limes", "Fruits", 60, 30.00),
("Lemons", "Fruits", 45, 25.00),
("Lettuce - Iceberg", "Veggies", 60, 45.00),
("Arugula", "Veggies", 30, 30.00),
("Mushrooms - Crimini", "Veggies", 25, 30.00),
("Tomatoes - Roma", "Veggies", 50, 25.00),
("Pickles", "Veggies", 30, 30.00),
("Onions - Red", "Veggies", 40, 45.00),
("Potatoes - Russets", "Veggies", 1, 45.00),
("Beef - Ground", "Meats", 100, 800.00),
("Pork - Bacon", "Meats", 50, 300.00),
("Beef - Ribeye", "Meats", 1, 45.00),
("Kosher Salt", "Spices", 25, 15.00),
("Black Peppercorns", "Spices", 5, 45.00),
("Sugar", "Spices", 50, 45.00),
("Oil - Canola", "Spices", 70, 35.00),
("Oil - EVOO", "Spices", 5, 175.00);

-- SELECT * FROM inventory;

INSERT INTO expenses (expense_name, price, category)
VALUES
("Oil Change", 65.00, "Truck Maintenance"),
("Tire Rotation", 40.00, "Truck Maintenance"),
("Repair", 500.00, "Truck Maintenance"),
("Medium Repair", 1000.00, "Truck Maintenance"),
("Large Repair", 1500.00, "Truck Maintenance"),
("Spatulas", 10.00, "Kitchenware"),
("Fryer", 3500.00, "Kitchenware"),
("Grill - Flattop", 3500.00, "Kitchenware"),
("Refrigerator", 2000.00, "Kitchenware"), 
("Tongs", 10.00, "Kitchenware"), 
("Squeeze Bottles", 10.00, "Kitchenware"), 
("Paper Plates", 120.00, "Kitchenware"), 
("Utensils", 65.00, "Kitchenware");

-- SELECT * FROM expenses;

INSERT INTO todo (title, body, complete)
VALUES
("Fix Speakers", "Call Jason to get speakers fixed", false),
("Price new chalkboards", "52x52 with a chalk set too.", false),
("Call Chuck for beef prices", "555.555.5555", false);

-- SELECT * FROM todo;