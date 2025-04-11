# 🏡 Real Estate Website

A fully responsive, animated **Real Estate Website** built with **React**, **Tailwind CSS**, and **Framer Motion**.  
This is a Single Page Application (SPA) designed for smooth UX, clear structure, and modern aesthetics.

[🚀 Live Site](https://rohit-cpp.github.io/responsive-realstate-website/) <!-- Replace with your actual link -->

---

## ⚙️ Tech Stack

- ⚛️ **React (Vite)**
- 🎨 **Tailwind CSS**
- 🎞 **Framer Motion** – for smooth and elegant animations
- 📬 **Web3Forms** – to receive email notifications from the contact form
- 🔔 **React Toastify** – for clean toast notifications after form submission
- 🌐 **GitHub Pages** – for deploying the SPA

---

## ✨ Features

- 📱 Fully responsive across all devices
- 🎥 Animated transitions with Framer Motion
- 📧 Contact form that sends submissions via **Web3Forms**
- ✅ Instant form feedback using **React Toast**
- 🚀 Deployed seamlessly on GitHub Pages

---

🧩 Common Issues & Fixes
❌ "No routes matched location" error:
➜ Add a / route in your <Routes> to match the GitHub Pages entry point.

❌ Site only shows README on GitHub Pages:
➜ Ensure the gh-pages branch is selected in Repo → Settings → Pages → Source
➜ Make sure the Vite base path and BrowserRouter basename are set correctly

❌ Form doesn't submit or show confirmation:
➜ Double-check your Web3Forms endpoint and use React Toast to show success/error messages

---

## 🛠️ Deployment Instructions

If you're looking to deploy your own React + Vite + Tailwind SPA on GitHub Pages, here's what I did:

### 1. Install dependencies and gh-pages

```bash
npm install
npm install gh-pages --save-dev
