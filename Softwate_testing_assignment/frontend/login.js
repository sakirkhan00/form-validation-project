const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorBox = document.getElementById('error-message');

const usernameError = usernameInput.nextElementSibling;
const passwordError = passwordInput.parentElement.nextElementSibling;

function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === 'password' ? 'text' : 'password';
}

function showError(message) {
    errorBox.textContent = message;
    errorBox.style.display = 'block';
}

function clearError() {
    errorBox.textContent = '';
    errorBox.style.display = 'none';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearError();

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    const isUsernameOrEmailMatch = (enteredUsername === storedUsername || enteredUsername === storedEmail);
    const isPasswordMatch = (enteredPassword === storedPassword);

    if (isUsernameOrEmailMatch && isPasswordMatch) {
        alert("✅ Login successful!");
        window.location.href = 'home.html';
        // window.location.href = 'home.html'; // Optional redirect
    } else {
        showError("❌ Incorrect username or password.");
    }
});

usernameInput.addEventListener('input', clearError);
passwordInput.addEventListener('input', clearError);
