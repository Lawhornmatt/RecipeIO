const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { '': '' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('you may not log out.');
    }
  };
  
  document.querySelector('').addEventListener('click', logout);
  