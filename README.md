# 🌐 REUSABLE REACT TEMPLATE

## 🚀 Overview

This project is a modern, reusable React template built with **Vite**, supporting **Google OAuth login**, **multi-language localization**, and best practices for development, build management, and version control.

---

## ✨ Features

- ⚡ Vite-based React setup for fast development and hot reloading.
- 🔒 Google OAuth login (with Flask backend).
- 🌍 Localization with i18n (Supports English, Tamil, and Hindi).
- 🧹 Pre-configured ESLint and Prettier for consistent code style.
- ⚙️ Environment-based API configuration.
- 📦 Automated build and ZIP packaging for deployment.

---

## 🛠️ Setup Guide

> 📄 For detailed setup instructions, refer to the following documents:

- [`PROJECT_SETUP_GUIDELINES.md`](PROJECT_SETUP_GUIDELINES.md) – Local project setup steps.
- [`COMMIT_GUIDELINES.md`](COMMIT_GUIDELINES.md) – Standard commit message format.
- [`BUILD_GUIDELINES.md`](BUILD_GUIDELINES.md) – Build and packaging instructions.

---

## 🔐 Google OAuth Integration

This project uses **Google Sign-In** via a Flask backend.

- Frontend Login: Login page includes a **"Login with Google"** button.
- Backend Repo: OAuth logic and database handling is in a separate Flask project.

📎 **Backend Repository**: [Naveen131114/Google_Signin](https://github.com/Naveen131114/Google_Signin)

👉 Check its `README.md` for backend environment setup, OAuth credentials, and MySQL configuration.

---

## 🌐 Localization (i18n)

This project uses `react-i18next` for multilingual support.

- 🌐 Supported languages:
  - English (`en.json`)
  - Tamil (`ta.json`)
  - Hindi (`hi.json`)

- 🔖 Language files are located in:  
  `/src/locales/en.json`, `/ta.json`, and `/hi.json`

- 🔄 Language can be changed dynamically using a dropdown selector in the header.

Example i18n usage in a page:

```jsx
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return <h1>{t('home.welcome')}</h1>;
};
````

---

## 📬 Contact

For any questions, feel free to reach out via GitHub issues or contact the project maintainer.

Happy Coding! 🎉

