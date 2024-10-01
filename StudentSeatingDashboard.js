// StudentSeatingDashboard.js

// Add an event listener to the seating plan form
document.getElementById("seating-plan-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the selected values (optional, can be used for validation)
    const examinationType = document.getElementById('examination-type').value;
    const year = document.getElementById('year').value;
    const branch = document.getElementById('branch').value;

    // Validate the selections (basic example)
    if (examinationType === "" || year === "" || branch === "") {
        alert("Please select all options.");
        return;
    }

    // Open the specified PDF file in a new tab
    const pdfFile = "C:\Users\sudhe\OneDrive\Documents\SEATING.pdf"; // Path to your PDF file
    window.open(pdfFile, '_blank');
});