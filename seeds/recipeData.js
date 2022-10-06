const { Recipe } = require('../models');

const recipeData = [
    { //1
        name: 'BillyBoy Shake',
        ingredients: 'Shake stuff',
        directions: 'Shake it up',
        img: 'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/veggie-grilled-brussel-sprouts-a73b40.jpg'

    },
    { //2
        name: 'BillyBoy Sando',
        ingredients: 'Sando Stuff',
        directions: 'Stack dat junk',
        img: 'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/veggie-grilled-brussel-sprouts-a73b40.jpg'
    },
    { //3
        name: 'BillyBoy Cocktail',
        ingredients: 'Lotsa booze',
        directions: 'Shake dat stuff',
        img: 'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/veggie-grilled-brussel-sprouts-a73b40.jpg'
    },
    { //4
        name: 'SmamboBeeb Kebab',
        ingredients: 'Kebab Stuff',
        directions: 'Skewer dat junk',
        img: 'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/veggie-grilled-brussel-sprouts-a73b40.jpg'
    },
    { //5
        name: 'SmamboBeeb Hotdog',
        ingredients: 'Hotdogs, buns, mustard and mayo',
        directions: 'Blend all together in blender',
        img: 'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/veggie-grilled-brussel-sprouts-a73b40.jpg'
    },
    { //6
        name: 'SmamboBeeb Puddin',
        ingredients: 'Puddin Stuff',
        directions: 'Pour into bowl and stir the heck outta it',
        img: 'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/veggie-grilled-brussel-sprouts-a73b40.jpg'
    },
    { //7
        name: 'SnaowoReal Salad',
        ingredients: 'Kale, lettuce, chard, spinach, NO DRESSING',
        directions: 'Toss dat stuff',
        img: 'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/veggie-grilled-brussel-sprouts-a73b40.jpg'
    }, 
    {  //8
        name: 'SnaowoReal Beef Wellington',
        ingredients: 'Its a secret ;)',
        directions: 'Wouldnt you like to know',
        img: 'https://www.seriouseats.com/thmb/NI2q-GoxDJL_skNbvOGLYuoHR6k=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-ultimate-beef-wellington-recipe-step-17_edited-7d3dd38835a34be2bf320848b2d6d292.jpg'
    },
    {  //9
        name: 'SnaowoReal Ice Cream',
        ingredients: 'Lotsa booze + ice + cream',
        directions: 'Shaken not stirred',
        img: 'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/veggie-grilled-brussel-sprouts-a73b40.jpg'
    }
];

const seedRecipe = () => Recipe.bulkCreate(recipeData, {
    individualHooks: true,
    returning: true
});

module.exports = seedRecipe;