# 🏥 Tech.Care – Advanced Medical Patient Dashboard

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

A pixel-perfect, high-performance healthcare interface designed for clinical monitoring. This dashboard translates complex diagnostic datasets into intuitive, interactive visualizations while maintaining strict adherence to medical design systems.

---

## 🌟 Professional Highlights

* **Secure API Engineering**: Implements dynamic Base64 Basic Authentication to interface with protected medical data endpoints.
* **Intelligent Data Visualization**: Custom `Chart.js` implementation featuring smooth cubic interpolation (tension) and localized time-series filtering for 6-month blood pressure trends.
* **Fluid Responsive Architecture**: Employs a mobile-first, 12-column grid with `min-w-0` constraints to prevent data-heavy charts from breaking layout integrity.
* **Micro-Interaction Suite**: Engineered a "Tactile Feedback" system using Tailwind transitions, providing users with a 2px elevation "lift" and brightness shift on hover for interactive vital cards.
* **Design System Fidelity**: 100% compliance with **Manrope** typography specs (14px/19px leading) and specific HEX palettes (`#01F0D0`, `#072635`).

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React 19 (Vite) | Core UI logic and high-speed HMR. |
| **Styling** | Tailwind CSS v4 | CSS-first utility engine for rapid design-to-code. |
| **Charts** | Chart.js | Canvas-based rendering for high-density medical data. |
| **Fonts** | Manrope | Modern sans-serif optimized for legibility. |
| **Patterns** | Feature-Based | Scalable folder structure separating domain logic from UI. |

---

## 📂 System Architecture

```text
src/
├── assets/             # Global branding & medical SVG icon set
├── components/         # Atomic UI (Header, VitalCards, Sidebar)
├── features/           # Diagnosis charting & health analytics logic
├── services/           # Secure API clients & Auth interceptors
└── App.jsx             # Root layout & dashboard orchestration

📦 Getting Started
Follow these steps to set up the project locally:

1. Clone the Repository
Bash


git clone [https://github.com/YOUR_USERNAME/med-pulse-dashboard.git](https://github.com/YOUR_USERNAME/med-pulse-dashboard.git)
cd med-pulse-dashboard
2. Install Dependencies
Bash

# This will install React, Tailwind v4, Chart.js, and other required packages
npm install
3. Launch Development Environment
Bash

# Starts the Vite development server with Hot Module Replacement
npm run dev
