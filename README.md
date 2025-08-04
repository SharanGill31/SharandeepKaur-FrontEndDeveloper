Multi-Theme Switcher App
Overview
This is a React-based web application built for the Hipster Pte. Ltd. front-end developer role assessment. The app features a theme switcher with three distinct themes, each with unique layouts, fonts, and styles. It uses TypeScript, Tailwind CSS, React Router, and the Fake Store API to display sample product data.
Features

Theme Switcher: Choose between Theme 1 (Minimal), Theme 2 (Dark Sidebar), and Theme 3 (Colorful Cards) via a dropdown.
Persistent Themes: Theme selection persists across page reloads using localStorage with error handling.
Responsive Design: Optimized for desktop and mobile using Tailwind CSS.
API Integration: Fetches product data from Fake Store API.
Routing: Includes Home, About, and Contact pages using React Router.
Animations: Subtle transitions during theme switches.
TypeScript: Type-safe code with defined interfaces.
Security:
Sanitizes API data using DOMPurify to prevent XSS attacks.
Uses HTTPS for API requests to ensure secure communication.
Implements a Content Security Policy (CSP) to restrict resource loading.
Validates theme selection to prevent invalid inputs.
Handles localStorage errors gracefully.



Setup Instructions

Clone the Repository:git clone https://github.com/SharanGill31/SharandeepKaur-FrontEndDeveloper.git
cd multi-theme-switcher


Install Dependencies:npm install


Run the App:npm run dev

Open http://localhost:5173 in your browser.

Folder Structure
multi-theme-switcher/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, fonts
│   ├── components/        # Reusable components (Header, Button, Card)
│   ├── context/           # Theme context
│   ├── pages/             # Page components (Home, About, Contact)
│   ├── styles/            # Theme-specific styles
│   ├── types/             # TypeScript interfaces
│   ├── hooks/             # Custom hooks
│   ├── utils/             # API utilities
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── README.md
├── tailwind.config.js
├── postcss.config.js
└── package.json

Live Deployment


Notes

Uses Tailwind CSS v4 with @tailwindcss/postcss for styling.
Avoids large UI libraries as per requirements.
Theme transitions include smooth animations via CSS transition properties.
Compatible with all modern browsers and devices.
Secured with XSS protection, CSP, and HTTPS API calls.

Contact
For any queries, contact [Sharandeep Kaur] at [Sharankgill22@gmail.com].