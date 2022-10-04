const loginPage = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
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
  
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const username = document.querySelector('#user-name').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();
  
    if (firstName && lastName && username && email && password) {
      const response = await fetch('/register', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      // console.log(JSON.stringify({ firstName, lastName, username, email, password }))
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('you may not sign up.');
      }
    }
};
  
document
    .querySelector('#signmeup')
    .addEventListener('click', signupPage);

const takeToLogin = async () => {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Take me to log in');
    
      if (response.ok) {
        console.log('response: ' + response);
        document.location.replace('/login');
      } else {
        alert('you may not log in.');
      }
};
    
document.querySelector('#login').addEventListener('click', takeToLogin);
  