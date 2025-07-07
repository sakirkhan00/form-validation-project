# Software Testing Intern Assignment – InstaWeb Labs

## ✅ What I Built

- A simple responsive HTML + CSS form for name & email input.
- JavaScript is used to:
  - Validate both fields (required)
  - Ensure email contains "@"
  - Show alert messages based on validation
- A Python script (`form_receiver.py`) that:
  - Takes name and email from user input
  - Prints: "Received data: Name – ___, Email – ___"

## 🛠️ Tools Used

- HTML5
- CSS3
- JavaScript 
- Python

## ▶️ How To Run It

1. Open `index.html` in a browser.
2. Fill the form and click Submit:
   - If valid, a success alert shows.
   - If invalid, error alert appears.
3.Username Must Be String First ,Must BE 5 Characters
## 🔐 Password Validation Logic

The form includes strong password validation using JavaScript. The password field must satisfy the following conditions:

- Minimum 8 characters in length
- Must contain:
  - At least one **uppercase letter** (A–Z)
  - At least one **number** (0–9)
  - At least one **special character** (e.g., @, #, $, etc.)
- The password must start with either:
  - A capital letter (e.g., **Sakir123@**), or
  - A special character followed by a capital letter (e.g., **@Sakir123**)

The **"Confirm Password"** field must exactly match the password field.  
If any of these conditions fail, a relevant error message is displayed to the user.

