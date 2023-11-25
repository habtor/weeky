// From the table designed last week:
//================ 2NF
// 2NF was not violated, because there was no non-prime column on the same table 
// where it was dependent on part of "candidate key" columns.

//================ 3NF
// 3NF is also not violated, because there was no non-prim column thet depend on
// non-prim column

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



