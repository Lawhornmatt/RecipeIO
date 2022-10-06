  // ====================
  //  LOG OUT
  // ====================

  const logout = async() => {
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

  // ====================
  //  DELETE ACCOUNT
  // ====================
  const deleteAccount = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/account/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete account');
      }
    }
  };
  document
  .querySelector('.')
  .addEventListener('', deleteAccount);

  // ====================
  //  GENERATE RECIPE
  // ====================

  const genRecipe = async(event) => {
      event.preventDefault();

      // console.log(`\x1b[32mRECIPE MAKER CLICKED\x1b[0m`);

      const name = document.querySelector('#recipe-name').value.trim();
      const ingredients = document.querySelector('#recipe-ingredients').value.trim();
      const directions = document.querySelector('#recipe-directions').value.trim();

      var newRecipeForm = document.getElementById('newRecipeForm');
      var checkBoxes = newRecipeForm.querySelectorAll('input[type="checkbox"]');

      let bookAssign = [];

      // Sourced from: https://codelearningpoint.com/post/How-to-get-multiple-checkbox-value-in-javascript
      async function getData() { // this function will get called when the save button is clicked

          checkBoxes.forEach(item => { // loop all the checkbox item
              if (item.checked) { //if the check box is checked

                  bookAssign.push(item.name);
              }
          })
      };

      await getData();


      if (name && ingredients && directions && bookAssign[0]) {
          let response = await fetch('/recipes/newrecipe', {
              method: 'POST',
              body: JSON.stringify({ name, ingredients, directions, bookAssign }),
              headers: { 'Content-Type': 'application/json' },
          });

          // console.log(JSON.stringify({ name, ingredients, directions }))

          if (response.ok) {
              document.location.replace('/recipes');
          } else {
              alert('Recipe creation with book assignment aborted');
          }
      } else if (name && ingredients && directions) {
          let response = await fetch('/recipes/newrecipe', {
              method: 'POST',
              body: JSON.stringify({ name, ingredients, directions }),
              headers: { 'Content-Type': 'application/json' },
          });

          // console.log(JSON.stringify({ name, ingredients, directions }))

          if (response.ok) {
              document.location.replace('/recipes');
          } else {
              alert('Recipe creation didnt');
          }
      } else {
          alert(`RUH ROH`);
          console.log(`RUH ROH`);
      }
  };

  if (document.querySelector('#makeRecipe')) {
      document
          .querySelector('#makeRecipe')
          .addEventListener('click', genRecipe);
  }



  // ====================
  //  GENERATE BOOK
  // ====================

  const genBook = async(event) => {
      event.preventDefault();
      console.log(`\x1b[32mBOOK MAKER CLICKED\x1b[0m`);

      const name = document.querySelector('#book-name').value.trim();


      if (name) {
          let response = await fetch('/newbook', {
              method: 'POST',
              body: JSON.stringify({ name }),
              headers: { 'Content-Type': 'application/json' },
          });

          // console.log(`\x1b[32mCreate Book buton is clicked\x1b[0m`);
          // console.log(JSON.stringify({ response }))

          if (response.ok) {
              document.location.replace('/books');
          } else {
              alert('Book maker no work :(');
          }
      } else {
          alert(`RUH ROH`);
          console.log(`RUH ROH`);
      }
  };


  if (document.querySelector('#makeBook')) {
      document
          .querySelector('#makeBook')
          .addEventListener('click', genBook);
  }