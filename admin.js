let records = []; // Sample data structure (replace with actual data handling)

        // Function to add a record
        function addRecord() {
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let newRecord = { name: name, email: email };
            records.push(newRecord);
            refreshRecordList();
        }

        // Function to update a record (assuming records are identified uniquely)
        function updateRecord() {
            // Implement logic to update record (not shown in this example)
            refreshRecordList();
        }

        // Function to delete a record (assuming records are identified uniquely)
        function deleteRecord(index) {
            records.splice(index, 1);
            refreshRecordList();
        }

        // Function to refresh the record list displayed on the UI
        function refreshRecordList() {
            let recordList = document.getElementById('recordList');
            recordList.innerHTML = ''; // Clear existing list

            records.forEach((record, index) => {
                let recordItem = document.createElement('div');
                recordItem.classList.add('record-item');
                recordItem.innerHTML = `
                    <div><strong>Name:</strong> ${record.name}</div>
                    <div><strong>Email:</strong> ${record.email}</div>
                    <div class="record-actions">
                        <button onclick="deleteRecord(${index})">Delete</button>
                    </div>
                `;
                recordList.appendChild(recordItem);
            });
        }
let studentData = [50, 60, 70, 80, 90];
let facultyData = [10, 15, 20, 25, 30];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

// Function to render charts using Chart.js
function renderCharts() {
    // Chart for student enrollment trends
    let studentCtx = document.getElementById('studentEnrollmentChart').getContext('2d');
    let studentChart = new Chart(studentCtx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Student Enrollment Trends',
                data: studentData,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


let facultyCtx = document.getElementById('facultyCourseLoadsChart').getContext('2d');
    let facultyChart = new Chart(facultyCtx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Faculty Course Loads',
                data: facultyData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

// Call renderCharts function after DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderCharts();
});