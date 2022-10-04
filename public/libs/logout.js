const logout = async () => {
    const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('you may not log out.');
    }
};
  
document.querySelector('#logout').addEventListener('click', logout);

const genRecipe = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#recipe-name').value.trim();
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
    const directions = document.querySelector('#recipe-directions').value.trim();

    var newRecipeForm = document.getElementById('newRecipeForm');
    var checkBoxes = newRecipeForm.querySelectorAll('input[type="checkbox"]');

    let bookAssign = [];

    async function getData() { // this function will get called when the save button is clicked

      checkBoxes.forEach(item => { // loop all the checkbox item
          if (item.checked) {  //if the check box is checked
  
              bookAssign.push(item.name);
          }
      })
    };
    
    await getData();

  
    if (name && ingredients && directions && bookAssign[0]) {
      const response = await fetch('/matt/newrecipe', {
        method: 'POST',
        body: JSON.stringify({ name, ingredients, directions, bookAssign }),
        headers: { 'Content-Type': 'application/json' },
      });

      // console.log(JSON.stringify({ name, ingredients, directions }))
  
      if (response.ok) {
        document.location.replace('/recipes');
      } else {
        alert('you may not sign up.');
      }
    } else if (name && ingredients && directions) {
      const response = await fetch('/matt/newrecipe', {
        method: 'POST',
        body: JSON.stringify({ name, ingredients, directions }),
        headers: { 'Content-Type': 'application/json' },
      });

      // console.log(JSON.stringify({ name, ingredients, directions }))
  
      if (response.ok) {
        document.location.replace('/recipes');
      } else {
        alert('you may not sign up.');
      }
    }
};
  
document
    .querySelector('#makeRecipe')
    .addEventListener('click', genRecipe);

// Sourced from: https://codelearningpoint.com/post/How-to-get-multiple-checkbox-value-in-javascript
