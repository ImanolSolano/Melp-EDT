# 🍽️ Melp Web – Frontend Technical Test

Web application prototype for **Melp**, a platform focused on showcasing the best restaurants in the city.  
This project was developed as part of a **Frontend Developer Technical Test**, emphasizing clean UI, data visualization, geospatial calculations, and production-ready deployment.

🔗 **Live Demo:**  
https://imanolsolano.github.io/Melp-EDT/

🔗 **Repository:**  
https://github.com/ImanolSolano/Melp-EDT

---

## 🧩 Project Overview

The goal of this project is to present restaurant data in a **clear, organized, and visually appealing web interface**, allowing users to:

- Browse restaurants
- Sort them alphabetically or by rating
- Visualize restaurant locations on a map
- Perform geospatial queries (radius-based)
- Display statistical insights
- Receive recommendations based on proximity and rating

The application is built using **React + Vite** and deployed on **GitHub Pages**.

---

## 🚀 Tech Stack

- **React 18**
- **Vite**
- **Leaflet** (interactive maps)
- **CSS (custom, responsive)**
- **GitHub Pages** (deployment)

---

## 📦 Data Source

Original dataset provided by Melp:

https://imanolsolano.github.io/Melp-EDT/


### ⚠️ CORS Consideration

The dataset does not allow cross-origin requests from GitHub Pages in production.  
To resolve this:

✅ The dataset was downloaded and served locally from the `/public` directory.  
✅ This ensures reliability, performance, and compatibility with static hosting.

---

## ✨ Features Implemented

### ✅ Core Requirements

- 📋 Restaurant list with clean UI
- 🔤 Sort restaurants alphabetically
- ⭐ Sort restaurants by rating
- 🎨 Responsive and visually appealing layout
- 🌐 Deployed to GitHub Pages

---

### 🎁 Bonus Features

#### 🗺️ Interactive Map
- User can select a point on the map
- Adjustable radius (meters)
- Visual radius overlay

#### 📊 Geospatial Statistics
For restaurants inside the selected radius:
- Total count
- Average rating
- Standard deviation of ratings

#### 📍 Nearby Restaurant Markers
- Markers displayed only for restaurants inside the radius
- Custom Leaflet marker fix for Vite bundling

#### ⭐ Recommendations (Bonus 3)
- Suggests nearest restaurants based on:
  - Selected point
  - Radius
  - Rating range

#### 👍 Social Integration
- Facebook Like & Share buttons per restaurant
- External link to restaurant website (when available)

---

## 🧠 Technical Challenges & Solutions

### 1️.- CORS Issues in Production
**Problem:**  
GitHub Pages blocked requests to the S3 dataset.

**Solution:**  
- Downloaded dataset
- Served from `/public/data_melp.json`
- Used `import.meta.env.BASE_URL` to support both local and production environments

---

### 2️.- GitHub Pages Asset 404 Errors
**Problem:**  
CSS and JS assets returned 404 due to incorrect base path.

**Solution:**  
Configured `vite.config.js`:

## 🧠 Why Vite instead of Next.js?

For this technical test, **Vite + React** was intentionally chosen over frameworks like **Next.js**, based on the project scope and deployment constraints.

### Key reasons:

- **Static Application Requirements**  
  The project does not require server-side rendering (SSR), API routes, or dynamic backend logic.  
  A fully static build is sufficient and more efficient for this use case.

- **Simpler Deployment to GitHub Pages**  
  GitHub Pages is optimized for static sites.  
  Vite produces a clean static bundle without additional configuration or adapters.

- **Faster Development Experience**  
  Vite provides:
  - Instant server start
  - Lightning-fast Hot Module Replacement (HMR)
  - Minimal tooling overhead

- **Better Fit for the Evaluation Context**  
  Using Vite allows the focus to remain on:
  - Data handling
  - UI/UX quality
  - Geospatial calculations
  - Code organization and best practices

  rather than on framework-specific abstractions.

- **Framework Choice Based on Problem, Not Trend**  
  While Next.js is a powerful framework, introducing SSR, routing layers, and build complexity would not add value for this particular challenge.

### When Next.js would be a better choice

Next.js would be more appropriate if the application required:
- SEO-driven server-side rendering
- Backend APIs
- Authentication
- Dynamic routing at scale

For this challenge, **Vite provides a cleaner, more focused, and production-appropriate solution**.

Thank you for reviewing this project 🙌
I’ll be happy to walk through the code or discuss any design decisions.

— Imanol Solano