# 🍽️ Restaurant Website – Webpack Practice Project

This is a simple restaurant website built as a beginner project to learn **modular JavaScript development** using **Webpack**. It follows a clean project structure and uses Webpack to bundle JavaScript, CSS, and assets.

---

## 🧠 Purpose

The goal of this project is to:
- Learn how to structure JavaScript code in modules.
- Understand Webpack configuration and how bundling works.
- Practice using Webpack loaders and plugins.
- Get familiar with live development using `webpack-dev-server`.

---

## 🔧 Tech Stack

- HTML5 (templating via `html-webpack-plugin`)
- CSS3 (bundled via `style-loader` and `css-loader`)
- JavaScript (ES6 Modules)
- Webpack 5

---

## 📁 Project Structure

restaurant/
├── dist/ # Production-ready bundled output
├── src/
│ ├── assets/ # Images, fonts, etc.
│ ├── pages/ # Modular page components (home.js, menu.js, etc.)
│ ├── style.css # Global styles
│ ├── template.html # Base HTML template
│ └── index.js # Entry point
├── package.json
├── webpack.config.js
└── README.md


---

## 🔗 Live Demo

👉 **View it on GitHub Pages:**  
[https://mobaidullahfsl.github.io/Restaurant/](https://mobaidullahfsl.github.io/Restaurant/)

---

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

npm install

### 2️⃣ Run in Development Mode

npx webpack serve

- This uses webpack-dev-server to run your app locally with hot reloading.

### 3️⃣ Build for Production

npx webpack

- This generates an optimized production build in the dist/ directory.

---

### 📚 What I Learned

 - Add navigation with tab switching logic.

 - Implement responsiveness with media queries.

 - Style the menu and contact sections.

  - Add animations or transitions.

---

  ### 🙋‍♂️ Author Notes

  This project is a learning exercise, and I’m using it to get comfortable with modern frontend tooling and modular JS architecture.


