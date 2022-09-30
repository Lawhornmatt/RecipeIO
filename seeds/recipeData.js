const { Recipe } = require('../models');

const recipeData = [{
        name: "Creamy Roasted Red-Pepper Pasta",
        "ingredients": "Rigatoni Pasta (or pasta of your choice) [1 lb.]\nStock (chicken or beef) [1/2 cup]\nHeavy Whipping Cream [1 cup]\nFresh Basil Leaves [8]\n 12oz. Jar of Roasted-Red Peppers (drained)\nSalt [1/2 tsp.]\Red-Pepper Flakes [1/4 tsp or add more for taste]\nGrated Parmesean Cheese [1/2 cup]",
        directions: "Step 1 - In a high speed blender add heavy cream, stock, roasted red peppers, basil, salt and red pepper flakes. Blend until smooth.\nStep 2 - Cook pasta until al dente (about 6 minutes). Remove from heat and drain.\nStep 3 - In the same pot the pasta was cooked in, add your creamy raosted red pepper sauce and bring to a gentle simmer over medium-low heat. Add the parmesan cheese and drained pasta and cook for another 1-2 minutes, stirring constantly. Remove from heat and serve hot topped with extra parmesan cheese and fresh basil. Enjoy!"
    },
    {
        name: "Bowl of Cereal",
        ingredients: "Cereal of your choice\ndairy milk of your choice",
        directions: "Step 1 - pour cereal into empty bowl.\nStep 2 - pour desired amount of milk into bowl.\nStep 3 - eat."
    },
    {
        name: 'Banana Protein Shake',
        ingredients: 'Almond Milk[1 cup]\ n Greek Yogurt[½cup]\ n Vanilla Protein Powder[1 scoop]\ n Banana[1]\ n Ice[As needed]',
        directions: 'put everything in blender'
    }
];

const seedRecipe = () => Recipe.bulkCreate(recipeData, {
    individualHooks: true,
    returning: true
});

module.exports = seedRecipe;