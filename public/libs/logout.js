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
  
    if (name && ingredients && directions) {
      const response = await fetch('/newrecipe', {
        method: 'POST',
        body: JSON.stringify({ name, ingredients, directions }),
        headers: { 'Content-Type': 'application/json' },
      });

      // console.log(JSON.stringify({ name, ingredients, directions }))
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('you may not sign up.');
      }
    }
};
  
document
    .querySelector('#makeRecipe')
    .addEventListener('click', genRecipe);