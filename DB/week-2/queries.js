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

//========== All the Vegetarian recipes with Potatoes
const vegetarianPotatoes = `
  SELECT recipe.recipe_name 
  FROM recipe 
  JOIN recipe_ingredient ON recipe.recipe_id = recipe_ingredient.recipe_id 
  JOIN ingredient ON recipe_ingredient.ingredient_id = ingredient.ingredient_id
  JOIN recipe_category ON recipe.recipe_id = recipe_category.recipe_id
  JOIN category ON recipe_category.category_id = category.category_id
  WHERE ingredient.name = 'Salt' AND category.name = 'Vegetarian'`;
connection.query(vegetarianPotatoes, (err, result) => {
  if (err) throw err;
  console.log(result);
});

//========== All the cakes that do not need baking
const noBackCake = `
  SELECT recipe.recipe_name 
  FROM recipe 
  JOIN recipe_category ON recipe.recipe_id = recipe_category.recipe_id
  JOIN category ON recipe_category.category_id = category.category_id
  JOIN recipe_step ON recipe.recipe_id = recipe_step.recipe_id
  JOIN step ON recipe_step.step_id = step.step_id
  WHERE category.name = 'Cake' 
  AND step.description != '%Bake%' AND step.description != '%Cook%'`;
connection.query(noBackCake, (err, result) => {
  if (err) throw err;
  console.log(result);
});
//========== All the vegan and Japanese recipes
const vegaJapan = `
  SELECT recipe.recipe_name 
  FROM recipe 
  JOIN recipe_category ON recipe.recipe_id = recipe_category.recipe_id
  JOIN category ON recipe_category.category_id = category.category_id
  WHERE category.name = 'Vegan' OR category.name = 'Japanese'`;
connection.query(vegaJapan, (err, result) => {
  if (err) throw err;
  console.log(result);
});
// =========

connection.end();
