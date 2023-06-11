document.getElementById('btn-submit').addEventListener('click', function () {

  // get user email from input field
  const emailField = document.getElementById('user-email');
  const getEmail = emailField.value;
  // get user password from password input
  const passwordField = document.getElementById('user-password');
  const getPassword = passwordField.value;

  // check email, password verify
  if (getEmail === 'tamim@gmail.com' && getPassword === '123456') {
    window.location.href = 'bank.html'
  }
  else {
    console.log('invalid user')
  }
})