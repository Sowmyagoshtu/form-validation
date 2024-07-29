// scripts.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    let isValid = true;
    let message = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const attending = document.getElementById('attending').value;

    if (!name) {
        isValid = false;
        message += 'Name is required.\n';
    }
    if (!email) {
        isValid = false;
        message += 'Email is required.\n';
    }
    if (!phone) {
        isValid = false;
        message += 'Phone is required.\n';
    }
    if (!attending) {
        isValid = false;
        message += 'Attending is required.\n';
    }

    if (!navigator.onLine) {
        isValid = false;
        message += 'You are offline. Please check your internet connection.\n';
    }

    if (!isValid) {
        alert(message);
    } else {
        this.submit(); // Submit the form if all required fields are filled and user is online
    }
});

// Get browser information
const browserInfo = `
Browser: ${navigator.userAgent}
Platform: ${navigator.platform}
Online: ${navigator.onLine ? 'Yes' : 'No'}
`;

// Get location information
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        const locationInfo = `
Latitude: ${position.coords.latitude}
Longitude: ${position.coords.longitude}
        `;
        document.getElementById('info').textContent = browserInfo + locationInfo;
    });
} else {
    document.getElementById('info').textContent = browserInfo + 'Location: Not available';
}

// Copy information to clipboard
document.getElementById('copyButton').addEventListener('click', function() {
    const infoText = document.getElementById('info').textContent;
    navigator.clipboard.writeText(infoText).then(() => {
        alert('Information copied to clipboard');
    }).catch((err) => {
        alert('Failed to copy information: ' + err);
    });
});
