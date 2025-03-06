# FOODZZYY - Food Website

-[LIVE LINK](https://foodzzyy.vercel.app/)

This is a food-related website built using **React**, **Redux** for state management, **Firebase** for authentication and storage, and **React-Toastify** for toast notifications. The site also uses **React-Responsive-Carousel** for creating a carousel on the landing page, **React Icons** for UI icons, and **Modular CSS** for styling.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Landing Page Carousel**: A fully responsive carousel on the landing page powered by `react-responsive-carousel`.
- **State Management**: Utilized `Redux` for efficient state management across components.
- **Firebase Storage**: Integrated with Firebase for storing images and data.
- **Modular CSS**: Styled components using modular CSS for a clean, maintainable styling architecture.
- **Responsive Design**: Fully responsive, designed to work across multiple device sizes.
- **Toast Notifications**: Toast messages for better user interaction and notifications using `react-toastify`.
- **UI Icons**: Icons used throughout the app are sourced from `react-icons`.

## Technologies Used

- **React**: Frontend JavaScript framework.
- **Redux**: State management.
- **Firebase**: Cloud storage solution.
- **React-Responsive-Carousel**: For a carousel component on the landing page.
- **React-Toastify**: For displaying toast notifications.
- **React-Icons**: For adding icons to UI elements.
- **Modular CSS**: CSS Modules for scoped and maintainable styles.

```/Foodzzyy
│
├── /public                   # Public assets and index.html
│
├── /src                      # Source files for the app
│   ├── /assets               # Static files (images, fonts, etc.)
│   ├── /components           # Reusable components
│   ├── /Configuration        # Firebase Configuration
│   ├── /Containers           # Containers like Home, Review, Cart and Login
│   ├── /Slices               # Slices for Redux
│   ├── /Store.js             # Redux Store Configuration
│   └── App.js                # Main app component
│
└── index.html                # html file