const loginPage = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();
  
    if (email && password) {
      const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { '': '' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('you may not log in.');
      }
    }
  };
  
  const signup = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('').value.trim();
    const email = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();
  
    if (username && email && password) {
      const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { '': '' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('you may not sign up.');
      }
    }
  };
  
  document
    .querySelector('')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('')
    .addEventListener('submit', signupFormHandler);
  