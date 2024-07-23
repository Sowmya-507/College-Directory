const signupButton = document.getElementById('signup-button');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

signupButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Validate inputs
  if (!email || !username || !password || !confirmPassword) {
    alert('Please fill in all fields');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Send data to server (replace with your own API endpoint)
  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, username, password })
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      alert('Signup successful');
      // Redirect to login page or dashboard
      window.location.href="login.html"
    } else {
      alert('Signup failed');
    }
  })
  .catch((error) => console.error('Error:', error));
});

