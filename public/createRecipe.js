const submit = document.querySelector('#submit')
const recipeName = document.querySelector('#recipe-name').value.trim();
const ingredients = document.querySelector('#recipe-ingredients').value.trim();
const directions = document.querySelector('#recipe-directions').value.trim();
const picture = document.querySelector('#recipe-picture').value;
const breakfast = document.querySelector('#breakfast-book').value.trim();
const lunch = document.querySelector('#lunch-book').value.trim();
const dinner = document.querySelector('#dinner-book').value.trim();


submit.addEventListener("click", function(event){
    event.preventDefault();
    if (recipeName && ingredients) {
        const recipe = {
            name: recipeName,
            ingredients: ingredients,
            directions: directions,
            picture: picture,
            breakfast: breakfast,
            lunch: lunch,
            dinner: dinner
        };
    } else {
        alert("missing name or ingredients")
    }
});
