const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorBox = document.getElementById('error-message');

const usernameError = username.nextElementSibling;
const emailError = email.nextElementSibling;
const passwordError = password.parentElement.nextElementSibling;
const confirmPasswordError = confirmPassword.parentElement.nextElementSibling;

function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

function showError(message) {
    errorBox.textContent = message;
    errorBox.style.display = "block";
}

function clearError() {
    errorBox.textContent = "";
    errorBox.style.display = "none";
}

function validateUsername() {
    const value = username.value.trim();
    // Updated regex to require at least 5 characters, starting with a letter, followed by letters or numbers
    const regex = /^[A-Za-z][A-Za-z0-9]*$/;

    // Check if the username is at least 5 characters long and matches the regex
    if (value.length < 5 || !regex.test(value)) {
        usernameError.textContent = "Username must be at least 5 characters long and can contain only letters and numbers.";
        showError("❌ Sorry, you entered a wrong username");
        return false;
    } else {
        usernameError.textContent = "";
        return true;
    }
}




function validateEmail() {
    const value = email.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
        emailError.textContent = "Enter a valid email address";
        showError("❌ Sorry, you entered wrong email");
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validatePassword() {
    const value = password.value.trim();

    const isLengthValid = value.length >= 8;
    const hasLetter = /[A-Za-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[^A-Za-z0-9]/.test(value);

    // Rule 1: Check Length
    if (!isLengthValid) {
        passwordError.textContent = "Password must be at least 8 characters";
        showError("❌ Sorry, password must be 8 digits");
        return false;
    }

    // Rule 2: Check valid content type
    if (!(hasLetter && hasNumber && hasSpecial)) {
        passwordError.textContent = "Must include letters, numbers & special character";
        showError("❌ Sorry, password must be valid type");
        return false;
    }

    // Rule 3: Start with capital OR special + capital
    const firstChar = value.charAt(0);
    const secondChar = value.charAt(1);

    if (!/[A-Z]/.test(firstChar)) {
        if (!/[^A-Za-z0-9]/.test(firstChar) || !/[A-Z]/.test(secondChar)) {
            passwordError.textContent = "Password must start with capital letter or special + capital";
            showError("❌ Sorry, password must start with capital or special+capital");
            return false;
        }
    }

    passwordError.textContent = "";
    return true;
}


function validateConfirmPassword() {
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        showError("❌ Sorry, passwords do not match");
        return false;
    } else {
        confirmPasswordError.textContent = "";
        return true;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearError();

    const validName = validateUsername();
    const validEmail = validateEmail();
    const validPassword = validatePassword();
    const validConfirm = validateConfirmPassword();

    if (validName && validEmail && validPassword && validConfirm) {
        // ✅ Save data to localStorage
        localStorage.setItem('username', username.value.trim());
        localStorage.setItem('email', email.value.trim());
        localStorage.setItem('password', password.value.trim());

        // ✅ Show alert and redirect
        alert("🎉 Account created successfully!");
        if (confirm("Click OK to proceed to login page.")) {
            window.location.href = 'login.html';
        }

        form.reset();
        clearError();
    }
});
