const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "food",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connection established...");
});

//============ Delete database if exist ============
const deleteDatabase = "DROP DATABASE IF EXISTS food";
connection.query(deleteDatabase, (err) => {
  if (err) throw err;
  console.log("Database deleted...");
});

connection.query("CREATE DATABASE IF NOT EXISTS food;", (err) => {
  if (err) throw err;
  console.log("Database Created...");
});

connection.query("USE food;", (err) => {
  if (err) throw err;
  console.log("Database selected...");
});

//======================= Design tables

const recipe =
  "CREATE TABLE IF NOT EXISTS recipe (recipe_id INT AUTO_INCREMENT PRIMARY KEY, recipe_name VARCHAR(255) NOT NULL UNIQUE)";

const category =
  "CREATE TABLE IF NOT EXISTS category (category_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE)";

const ingredients =
  "CREATE TABLE IF NOT EXISTS ingredient (ingredient_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE)";

const steps =
  "CREATE TABLE IF NOT EXISTS step (step_id INT AUTO_INCREMENT PRIMARY KEY, description TEXT NOT NULL UNIQUE)";

const recipeCategory =
  "CREATE TABLE IF NOT EXISTS recipe_category (recipe_id INT,category_id INT, FOREIGN KEY (recipe_id) REFERENCES recipe(recipe_id), FOREIGN KEY (category_id) REFERENCES category(category_id), PRIMARY KEY (recipe_id, category_id))";

const recipeIngredients =
  "CREATE TABLE IF NOT EXISTS recipe_ingredient(recipe_id INT, ingredient_id INT, FOREIGN KEY (recipe_id) REFERENCES recipe(recipe_id), FOREIGN KEY (ingredient_id) REFERENCES ingredient(ingredient_id), PRIMARY KEY (recipe_id, ingredient_id))";

const recipeSteps =
  "CREATE TABLE IF NOT EXISTS recipe_step (recipe_id INT, step_id INT, FOREIGN KEY (recipe_id) REFERENCES recipe(recipe_id), FOREIGN KEY (step_id) REFERENCES step(step_id), PRIMARY KEY (recipe_id, step_id))";

//======================= Create tables
connection.query(recipe, (err) => {
  if (err) throw err;
  console.log("Recipe table created...");
});
connection.query(category, (err) => {
  if (err) throw err;
  console.log("Category table created...");
});
connection.query(ingredients, (err) => {
  if (err) throw err;
  console.log("Ingredients Table created...");
});
connection.query(steps, (err) => {
  if (err) throw err;
  console.log("Steps table created...");
});
connection.query(recipeCategory, (err) => {
  if (err) throw err;
  console.log("recipeCategory table created...");
});
connection.query(recipeIngredients, (err) => {
  if (err) throw err;
  console.log("recipeIngredients table created...");
});
connection.query(recipeSteps, (err) => {
  if (err) throw err;
  console.log("recipeSteps Table created...");
});

//======================= Insert into tables
const insertRecipe =
  "INSERT INTO recipe (recipe_name) VALUES ('No-Bake Cheesecake'),('Roasted Brussels Sprouts'),('Mac & Cheese'),('Tamagoyaki Japanese Omelette')";

connection.query(insertRecipe, (err) => {
  if (err) throw err;
  console.log("Recipes added...");
});

//========
const insertCategory =
  "INSERT INTO category (name) VALUES ('Cake'), ('No-Bake'), ('Vegetarian'), ('Vegan'), ('Gluten-Free'), ('Japanese')";

connection.query(insertCategory, (err) => {
  if (err) throw err;
  console.log("Categories added...");
});

//========
const insertIngredent =
  "INSERT INTO ingredient (name) VALUES('Condensed milk'),('Cream Cheese'),('Lemon Juice'),('Pie Crust'),('Cherry Jam'),('Brussels Sprouts'),('Sesame seeds'),('Pepper'),('Salt'),('Olive oil'),('Macaroni'),('Butter'),('Flour'),('Milk'),('Shredded Cheddar cheese'),('Eggs'),('Soy sauce'),('Sugar')";

connection.query(insertIngredent, (err) => {
  if (err) throw err;
  console.log("Ingredents added...");
});

//========
const insertSteps =
  "INSERT INTO step (description) VALUES('Beat Cream Cheese'),('Add condensed Milk and blend'),('Add Lemon Juice and blend'),('Add the mix to the pie crust'),('Spread the Cherry Jam'),('Place in refrigerator for 3h'),('Preheat the oven'),('Mix the ingredients in a bowl'),('Spread the mix on baking sheet'),('Bake for 30 min'),('Cook Macaroni for 8 min'),('Melt butter in a saucepan'),('Add flour, salt, pepper and mix'),('Add Milk and mix'),('Cook until mix is smooth'),('Add cheddar cheese'),('Add the macaroni'),('Beat the eggs'),('Add soya sauce, sugar and salt'),('Add oil to a sauce pan'),('Bring to medium heat'),('Let is cook for 1 min'),('Remove pan from fire')";

connection.query(insertSteps, (err) => {
  if (err) throw err;
  console.log("Steps added...");
});

//========
const insertRecipeCategory =
  "INSERT INTO recipe_category (recipe_id,category_id) VALUES (1,1),(1,2),(1,3),(2,4),(2,5),(3,3),(4,3),(4,6)";

connection.query(insertRecipeCategory, (err) => {
  if (err) throw err;
  console.log("data added...");
});

//========
const insertRecipeIngredients =
  "INSERT INTO recipe_ingredient (recipe_id,ingredient_id) VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(2,3),(2,6),(2,8),(2,7),(2,9),(2,10),(3,8),(3,9),(3,11),(3,12),(3,13),(3,14),(3,15),(4,16),(4,17),(4,18),(4,9),(4,10)";

connection.query(insertRecipeIngredients, (err) => {
  if (err) throw err;
  console.log("data added...");
});

//========
const insertRecipeSteps =
  "INSERT INTO recipe_step (recipe_id,step_id) VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(2,7),(2,8),(2,9),(2,10),(3,11),(3,12),(3,13),(3,14),(3,15),(3,16),(4,17),(4,18),(4,19),(4,20),(4,21),(4,22),(4,23)";

connection.query(insertRecipeSteps, (err) => {
  if (err) throw err;
  console.log("data added...");
});

// ================
connection.end();
