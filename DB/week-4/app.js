const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const createIngridents = async (client) => {
  const ingredientsList = [
    "Condensed milk",
    "Cream Cheese",
    "Lemon Juice",
    "Pie Crust",
    "Cherry Jam",
    "Brussels Sprouts",
    "Sesame seeds",
    "Pepper",
    "Salt",
    "Olive oil",
    "Macaroni",
    "Butter",
    "Flour",
    "Milk",
    "Shredded Cheddar cheese",
    "Eggs",
    "Soy sauce",
    "Sugar",
  ];

  const result = await client
    .db("food")
    .collection("ingredient")
    .insertMany(
      ingredientsList.map((ingredient_name) => ({ ingredient_name }))
    );

  console.log(`${result.insertedCount} Ingredients were add succussfuly... `);
};

const createRecipe = async (client) => {
  const recipes = [
    {
      name: "No-Bake Cheesecake",
      category: ["Cake", "No-Bake", "Vegetarian"],
      steps: [
        "Beat Cream Cheese",
        "Add condensed Milk and blend",
        "Add Lemon Juice and blend",
        "Add the mix to the pie crust",
        "Spread the Cherry Jam",
        "Place in refrigerator for 3h.",
      ],
      ingredients: [
        new ObjectId("656a216f190e0d86b425a0b0"),
        new ObjectId("656a216f190e0d86b425a0b1"),
        new ObjectId("656a216f190e0d86b425a0b2"),
        new ObjectId("656a216f190e0d86b425a0b3"),
        new ObjectId("656a216f190e0d86b425a0b4"),
      ],
    },
    {
      name: "Roasted Brussels Sprouts",
      category: ["Vegan", "Gluten-Free"],
      steps: [
        "Preheat the oven",
        "Mix the ingredients in a bowl",
        "Spread the mix on baking sheet",
        "Bake for 30'",
      ],
      ingredients: [
        new ObjectId("656a216f190e0d86b425a0b5"),
        new ObjectId("656a216f190e0d86b425a0b2"),
        new ObjectId("656a216f190e0d86b425a0b6"),
        new ObjectId("656a216f190e0d86b425a0b7"),
        new ObjectId("656a216f190e0d86b425a0b8"),
        new ObjectId("656a216f190e0d86b425a0b9"),
      ],
    },
    {
      name: "Mac & Cheese",
      category: ["Vegetarian"],
      steps: [
        "Cook Macaroni for 8'",
        "Melt butter in a saucepan",
        "Add flour, salt, pepper and mix",
        "Add Milk and mix",
        "Cook until mix is smooth",
        "Add cheddar cheese",
        "Add the macaroni",
      ],
      ingredients: [
        new ObjectId("656a216f190e0d86b425a0ba"),
        new ObjectId("656a216f190e0d86b425a0bb"),
        new ObjectId("656a216f190e0d86b425a0bc"),
        new ObjectId("656a216f190e0d86b425a0b8"),
        new ObjectId("656a216f190e0d86b425a0b7"),
        new ObjectId("656a216f190e0d86b425a0bd"),
        new ObjectId("656a216f190e0d86b425a0be"),
      ],
    },
    {
      name: "Tamagoyaki Japanese Omelette",
      category: ["Vegetarian", "Japanese"],
      steps: [
        "Beat the eggs",
        "Add soya sauce, sugar and salt",
        "Add oil to a sauce pan",
        "Bring to medium heat",
        "Add some mix to the sauce pan",
        "Let is cook for 1'",
        "Add oil to a sauce pan",
        "Add some mix to the sauce pan",
        "Let is cook for 1'",
        "Remove pan from fire",
      ],
      ingredients: [
        new ObjectId("656a216f190e0d86b425a0bf"),
        new ObjectId("656a216f190e0d86b425a0c0"),
        new ObjectId("656a216f190e0d86b425a0c1"),
        new ObjectId("656a216f190e0d86b425a0b8"),
        new ObjectId("656a216f190e0d86b425a0b9"),
      ],
    },
  ];

  const collection = await client.db("food").collection("recipe");

  const existRecipes = await collection.find().toArray();

  const newRecipes = recipes.filter(
    (recipe) =>
      !existRecipes.some((existRecipe) => existRecipe.name === recipe.name)
  );

  if (newRecipes.length === 0) {
    console.log("No new recipes to add");
    return;
  }

  const result = await collection.insertMany(newRecipes);

  console.log(`${result.insertedCount} Recipes were add succussfuly... `);
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    // create Ingridents collection
    await createIngridents(client);

    // create Recipe collection
    await createRecipe(client);

  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
}

main();
