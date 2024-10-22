// login.js

// Initialize Firebase Auth
const auth = firebase.auth();

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get email and password from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Authenticate the user
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log('User logged in:', user);

            // Redirect to profile or dashboard page
            window.location.href = "profile.html"; // Change to your desired page
        })
        .catch((error) => {
            // Handle login errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error logging in:', errorMessage);
            alert(`Login failed: ${errorMessage}`);
        });
});
