# Wealth Management Dashboard

## Overview

This project is a responsive, interactive Wealth Management Dashboard built using React and Tailwind CSS.  
It visualizes complex nested portfolio data with a tree view and detailed metadata cards, enabling users to explore entities, investments, directories, and files intuitively.

This project was developed as part of the **QPLIX Design Frontend Challenge**, where the goal is to design and implement a solution to visualize deeply nested structures (e.g., portfolios, investments, legal entities, and files) in a clear and user-friendly interface.

## Design

- Initial wireframes and UI/UX design were created in **Figma** (link provided separately).
- The design prioritizes clarity, intuitive navigation, and consistent visual hierarchy.
- Special attention was given to usability, spacing, and consistency to enhance the user experience.

## Features

- Tree View Panel: to navigate hierarchical portfolio structures
- Dynamic Main Card: that updates based on the selected node
- Breadcrumb Navigation: for contextual awareness within nested structures
- Tables: for Entities, Investments, Directories, and Files
- Download & Preview Actions: with animated toast notifications
- Account Settings Dropdown
- Responsive Design: with collapsible sidebars and adaptable layout
- Smooth UI Transitions: and subtle hover animations throughout

## Tech Stack

- **React** (functional components, hooks)
- **Tailwind CSS** for styling
- **JavaScript ES6+** features
- No backend, all data loaded from static JSON (`file-structure.json`)

## Project Structure

- `/src/components` — React components (Sidebar, TreeView, MainCard, Tables, etc.)
- `/src/data` — Static JSON data for portfolio hierarchy
- `/src/assets` — Icons and images
- `/src/utils` — Utility functions (e.g., date formatting)
- `/src/App.jsx` — Main app entry point

## Installation & Running

1. Clone the repo

````bash
git clone https://github.com/heliavz/Holdings_Portfolio

2. Install dependencies

```bash
npm install

3. Start the development server

```bash
npm run dev

4. Open "http://localhost:5173" in your browser.

````

## Figma Design

A link to the original Figma design is provided in the submission email.

## Author

Helia Valizadeh
Email: heliiavalizadeh@gmail.com
