const profileData = {
    name: "John Doe",
    photo: "avatar.jpg",
    contact: {
        email: "john.doe@example.com",
        phone: "+1234567890"
    },
    academic: {
        courses: ["Mathematics", "Physics"],
        grades: {
            mathematics: "A",
            physics: "B+"
        },
        attendance: {
            mathematics: "90%",
            physics: "85%"
        }
    }
};

// Mock advisor data
const advisorData = [
    { name: "Dr. Jane Smith", email: "jane.smith@example.com", phone: "+9876543210" },
    { name: "Prof. Michael Brown", email: "michael.brown@example.com", phone: "+8765432109" }
];

function displayProfile() {
    const profileInfo = document.getElementById('profileInfo');
    const profileHTML = `
        <img src="${profileData.photo}" alt="Profile Photo">
        <p>Name: ${profileData.name}</p>
        <p>Email: ${profileData.contact.email}</p>
        <p>Phone: ${profileData.contact.phone}</p>
        <h3>Academic Information</h3>
        <ul>
            <li>Courses:
                <ul>
                    ${profileData.academic.courses.map(course => <li>${course}</li>).join('')}
                </ul>
            </li>
            <li>Grades:
                <ul>
                    ${Object.entries(profileData.academic.grades).map(([course, grade]) => <li>${course}: ${grade}</li>).join('')}
                </ul>
            </li>
            <li>Attendance:
                <ul>
                    ${Object.entries(profileData.academic.attendance).map(([course, attendance]) => <li>${course}: ${attendance}</li>).join('')}
                </ul>
            </li>
        </ul>
    `;
    profileInfo.innerHTML = profileHTML;
}

// Display advisor contact list
function displayAdvisors() {
    const advisorList = document.getElementById('advisorList');
    const advisorHTML = advisorData.map(advisor => `

    <li>
    <p>Name: ${advisor.name}</p>
    <p>Email: ${advisor.email}</p>
    <p>Phone: ${advisor.phone}</p>
</li>
`).join('');
advisorList.innerHTML = advisorHTML;
}

// Mock search functionality (replace with actual backend API call)
function searchStudents() {
const searchTerm = document.getElementById('searchInput').value.toLowerCase();
const filteredStudents = []; // Implement your search logic here

const studentList = document.getElementById('studentList');
const searchResultsHTML = filteredStudents.map(student => `
<li>
    <p>Name: ${student.name}</p>
    <p>Department: ${student.department}</p>
    <p>Year: ${student.year}</p>
</li>
`).join('');
studentList.innerHTML = searchResultsHTML;
}
displayProfile();
displayAdvisors();