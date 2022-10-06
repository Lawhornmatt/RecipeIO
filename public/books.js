const add = document.querySelector("#add");
const bookInput = document.querySelector('#recipe-book-name');
const recipe = document.querySelector('#all-recipes');


add.addEventListener("click", function(event) {
    event.preventDefault();

    if (bookInput && recipe) {
        var book = {
            name: bookInput.value,
            recipe: recipe.value,
          };
        
    } else {
        alert("missing book name or recipe")
    }
});


