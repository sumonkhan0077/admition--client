# UniFind - University Admission Finder



**UniFind** is a modern, user-friendly university admission platform designed to help high school and college students find their perfect university. Search, filter, and compare universities based on budget, test scores, GPA requirements, location, programs, and more — all in one place!

Live Demo: [https://unifinder-students.netlify.app/](https://unifinder-students.netlify.app/)  

**Author**: Md Sumon Khan  
**Tech Stack**:  (MySQL, Express, React, Node.js)

---
![Banner](/src/assets/banner.png)

## ✨ Key Features

- **Smart Search & Filters**  
  Filter universities by:
  - Budget / Tuition fees
  - IELTS / GPA scores
  - Required GPA
  - Location (country, city, or region)
  - Program type (Undergraduate, Postgraduate, etc.)
  - University ranking & reputation

- **Detailed University Profiles**  
  View complete info: admission requirements, deadlines, scholarships, campus life, and more.

- **Compare Universities**  
  Select and compare multiple universities side-by-side for easy decision-making.

- **Responsive & Modern UI**  
  Fully mobile-friendly design built with React and Tailwind CSS.

- **Secure Backend with MySQL**  
  Powered by Node.js + Express and MySQL database for reliable data management.

## 🖥️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- React Components (Header, Footer, Navbar, UniversityList, ComparisonModal, etc.)

### Backend
- Node.js + Express
- MySQL Database
- REST API

### Deployment
- Frontend: [Netlify](https://unifinder-students.netlify.app/)
- Backend: [GitHub Repo - Admission Server](https://github.com/sumonkhan0077/admition-server)

## 📂 Project Structure
```
src/
├── assets/             # Images, icons
├── components/         # Reusable components
│   ├── ApplyModal.jsx
│   ├── ComparisonModal.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── University.jsx
│   └── UniversityList.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
public/                 # Public assets (vite.svg, etc.)
README.md
package.json
vite.config.js
```

