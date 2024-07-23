const students = [
    { name: "John Doe", photo: "john.jpg", contact: "john.doe@example.com, 123-456-7890" },
    { name: "Jane Smith", photo: "jane.jpg", contact: "jane.smith@example.com, 987-654-3210" }
  ];
  
  // Function to populate student list
  function populateStudentList() {
    const studentList = document.getElementById('student-list');
    students.forEach(student => {
      const row = `<tr>
                    <td>${student.name}</td>
                    <td><img src="${student.photo}" alt="${student.name}"></td>
                    <td>${student.contact}</td>
                  </tr>`;
      studentList.innerHTML += row;
    });
  }
  
  // Event listener for form submission
  document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Retrieve updated profile information
    const officeHours = document.getElementById('office-hours').value;
    const contactEmail = document.getElementById('contact-email').value;
    const phoneNumber = document.getElementById('phone-number').value;

    // Here you would typically send this data to the server to update the database
    // For demonstration purposes, we'll just log the values
    console.log("Updated Profile Information:");
    console.log("Office Hours:", officeHours);
    console.log("Contact Email:", contactEmail);
    console.log("Phone Number:", phoneNumber);
  
    // Optionally, you can update the UI to reflect the changes
    alert("Profile updated successfully!"); // Replace with actual UI update logic
  });