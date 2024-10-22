// signup.js

const auth = firebase.auth();
const db = firebase.firestore();

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create user with Firebase Authentication
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Save additional user info in Firestore
            return db.collection('users').doc(user.uid).set({
                uid: user.uid,
                name: fullName,
                email: user.email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
        })
        .then(() => {
            console.log('User account created and saved to Firestore');
            alert('Account created successfully! Redirecting to login...');
            window.location.href = "login.html"; // Redirect to login page
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error('Error creating account:', errorMessage);
            alert('Error creating account: ' + errorMessage);
        });
});
