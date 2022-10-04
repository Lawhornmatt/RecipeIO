const loginPage = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
    if (email && password) {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('you may not log in.');
      }
    }
};

document
    .querySelector('#logmein')
    .addEventListener('click', loginPage);
  
const signupPage = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
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

const takeToLogin = async () => {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Take me to log in');
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('you may not log in.');
      }
};
    
document.querySelector('#login').addEventListener('click', takeToLogin);
  