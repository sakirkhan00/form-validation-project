# 🍕 Pizza Pie - Responsive E-commerce Landing Page

Welcome to **Pizza Pie**, a modern and fully responsive e-commerce-style landing page for a pizza restaurant or food delivery service. This project is ideal for learning front-end development, responsive design, and user authentication flow.

---

## 🔥 Features

- ✅ Stylish and responsive pizza landing page
- ✅ Scroll animations with [ScrollReveal.js](https://scrollrevealjs.org/)
- ✅ Mobile-first navigation with toggle menu
- ✅ Functional `Login` and `Signup` system using `localStorage`
- ✅ Secure logout with redirection
- ✅ Product-style pizza menu section
- ✅ Reusable design with sections like: Home, About, Menu, Services, Contact

---

## 📁 Project Structure


---

## 🛠️ How It Works

### 1. `signup.html`
- Validates user input (username, email, password).
- Stores data securely in `localStorage`.
- On success: redirects to `login.html`.

### 2. `login.html`
- Matches credentials against stored data.
- If correct: shows alert and redirects to `home.html`.

### 3. `home.html`
- Stylish pizza menu landing page
- "Logout" button clears session and redirects back to login.

---

## 💡 Technologies Used

- HTML5 + CSS3 (Responsive Design)
- JavaScript (Vanilla)
- [Boxicons](https://boxicons.com/) for icons
- [ScrollReveal.js](https://scrollrevealjs.org/) for animations
- Google Fonts (Poppins)

---

## 🔐 Auth Flow Summary

1. User signs up → data saved in `localStorage`
2. User logs in → credentials validated
3. Login successful → redirected to `home.html`
4. Logout → alert and back to login page

---



## 🚀 Getting Started

Just open `signup.html` in a browser to start the flow!

### Or use Live Server (VS Code Extension):

```bash
Right-click on signup.html → Open with Live Server


