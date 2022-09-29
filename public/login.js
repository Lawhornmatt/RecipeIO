const loginPage = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
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
  
  const signupPage = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();
  
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
    .querySelector('.loginForm')
    .addEventListener('submit', loginPage);
  
  document
    .querySelector('.signupForm')
    .addEventListener('submit', signupPage);
  