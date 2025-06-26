# Wealth Management Dashboard

## Overview

This project is a responsive, interactive Wealth Management Dashboard built using React and Tailwind CSS. It visualizes complex nested portfolio data with a tree view and detailed metadata cards, enabling users to explore entities, investments, directories, and files intuitively.

This project was developed as part of the **QPLIX Design Frontend Challenge**, where the goal is to design and implement a solution to visualize deeply nested structures (e.g., portfolios, investments, legal entities, and files) in a clear and user-friendly interface.

## Design

- Initial wireframes and UI/UX design were created in **Figma** (link provided separately).
- The design prioritizes clarity, intuitive navigation, and consistent visual hierarchy.
- Special attention was given to usability, spacing, and consistency to enhance the user experience.

## Features

- **Tree View Panel**: Navigate hierarchical portfolio structures using an expandable/collapsible tree interface.
- **Dynamic Main Card**: Updates in real-time to show metadata and child elements based on the selected node (e.g. entities, investments, directories, files).
- **Breadcrumb Navigation**: Provides contextual awareness and allows the user to traverse back up the hierarchy. Selecting any node in the breadcrumbs updates the MainCard and tree view accordingly.
- **Tables**: Display contextual data such as Entities, Investments, Directories, and Files, each styled with icons and clean layout.
- **Download & Preview Actions**: Available on file nodes. Interactions are confirmed via animated toast notifications.
- **Account Settings Dropdown**: Persistent profile section with dropdown functionality for future user account options.
- **Responsive Design**: Fully responsive layout with collapsible sidebar, adaptive scrollable content areas, and maintained functionality across screen sizes.
- **Smooth UI Transitions**: Subtle hover effects and animated transitions for panel changes, button interactions, and component loading.
- **Unit Tested Core Logic**: Includes tests using React Testing Library to verify MainCard renders metadata, conditionally displays tables (like Entities and Investments), and handles empty states correctly.

## Tech Stack

- **React** (functional components, hooks)
- **Tailwind CSS** for styling
- **JavaScript ES6+** features
- No backend, all data loaded from static JSON [file-structure.json](src/data/file-structure.json)

## Project Structure

```
/src
├── components/    # React components (Sidebar, TreeView, MainCard, Tables, etc.)
├── data/          # Static JSON data for portfolio hierarchy
├── assets/        # Icons and images
├── utils/         # Utility functions (e.g., date formatting)
└── App.jsx        # Main app entry point
```

## Installation & Running

1. **Clone the repository**

   ```bash
   git clone https://github.com/heliavz/Holdings_Portfolio
   cd Holdings_Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Figma Design

A link to the original Figma design is provided in the submission email.

## Author

**Helia Valizadeh**  
Email: heliiavalizadeh@gmail.com
