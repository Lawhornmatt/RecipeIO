const loginPage = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
  
      if (response.status === 'ok') {
        console.log(response)
        // document.location.replace('/');
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

  document.querySelector('.loginForm').addEventListener('submit', loginPage);
  
  document
    .querySelector('')
    .addEventListener('submit', signupPage);
  