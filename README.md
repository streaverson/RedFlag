# 🚩 RedFlag - AI-Powered Roast Engine

[![Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel)]([لینک_پروژه_تو_اینجا])
[![React](https://img.shields.io/badge/Frontend-React.js-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![OpenAI](https://img.shields.io/badge/AI-OpenAI%20GPT-green?style=flat-square&logo=openai)](https://openai.com/)

**RedFlag** is a witty, AI-driven web application that "roasts" users based on their input. It combines the power of Large Language Models (LLMs) with a sleek, modern user interface to deliver hilarious and sharp personality critiques.

## ✨ Features

- **🔥 Brutal Roasts:** Uses OpenAI's GPT models to generate unique, funny, and slightly "savage" critiques.
- **⚡ Real-time Interaction:** A smooth, responsive UI built with React and Framer Motion.
- **🛡️ Secure Backend:** Implements a Serverless architecture to protect sensitive API keys.
- **📱 Fully Responsive:** Optimized for all devices, from mobile to desktop.
- **🎨 Modern UI/UX:** Featuring custom animations, dark mode aesthetics, and fluid transitions.

## 🚀 Tech Stack

- **Frontend:** React.js, TailwindCSS, Framer Motion, Lucide React (Icons).
- **Backend:** Vercel Serverless Functions (Node.js).
- **AI Engine:** OpenAI API (GPT-4o-mini).
- **Deployment:** Vercel.

## 🏗️ Architecture

The project follows a **Decoupled Client-Server Architecture**:

1. **Client-side:** A React application handles user input and displays the AI response.
2. **Server-side:** To ensure security, all API calls to OpenAI are routed through **Vercel Serverless Functions**. This prevents the exposure of the `OPENAI_API_KEY` to the browser.

## 🛠️ Installation & Local Setup

1. **Clone the repository:**

```bash
   git clone https://github.com/[your-username]/redflag.git
   cd redflag

```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:Create a .env.local file in the root directory and add your OpenAI API key:**
   ```env
   `OPENAI_API_KEY=your_api_key_here`
   ```

````
4. **Run the development server (using Vercel CLI for Backend support):**
```bash

# Install Vercel CLI if you haven't


npm i -g vercel

# Run the project

vercel dev
````

🛡️ Security Note
Never commit your .env files to version control. This project uses .gitignore to ensure that sensitive credentials like OPENAI_API_KEY remain local and secure.

📝 License
Distributed under the MIT License. See LICENSE for more information.

Developed with ❤️ by Amir Valadkhani

---

<div dir="rtl">
خوشحال می‌شوم اگر پیشنهادی دارید یا می‌خواهید با من در ارتباط باشید:
<br/>instagram : https://www.instagram.com/amir_streaver_dev/ <br/>
<br/>Email: amirmahdi.valadkhani@gmail.com <br/>
<br/>LinkedIn: https://www.linkedin.com/in/amir-valadkhani-00179b268 <br/>
<br/>GitHub: https://github.com/streaverson

</div>
