document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  // Simulate authentication (replace with actual API call)
  if (username === 'Sowmya' && password === 'Sowmya07') {
    // Store user details in localStorage or session storage
    const user = { username, role };
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect based on role (example redirection)
    switch (role) {
      case 'STUDENT':
        window.location.href = 'student.html';
        break;
      case 'FACULTY_MEMBER':
        window.location.href = 'faculty.html';
        break;
      case 'ADMINISTRATOR':
        window.location.href = 'admin.html';
        break;
      default:
        alert('Unknown role');
    }
  } else {
    alert('Invalid credentials');
  }
});