# PERN Stack Project

## Repository

[GitHub Repository](https://github.com/RohanPoudel2024/PERN-STACK.git)

## Table of Contents

- [Project Overview](#project-overview)
- [My Learning Journey](#my-learning-journey)
  - [Day 10 Progress](#day-10-progress)
  - [Day 9 Progress](#day-9-progress)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Database Connection](#database-connection)
- [Future Development](#future-development)

## Project Overview

A full-stack web application built with the PERN stack:
- **PostgreSQL** for the database
- **Express.js** as the backend framework
- **React.js** for the frontend (to be implemented)
- **Node.js** as the runtime environment
- **Sequelize** as the ORM for database management

## My Learning Journey

### Day 10 Progress

Today I continued improving the database integration:
- Created a data model for books using Sequelize
- Fixed circular dependency issues between model and connection files
- Resolved import path problems in Node.js modules
- Corrected syntax errors in the database model definitions
- Successfully synchronized the model with the PostgreSQL database

### Day 9 Progress

Today I focused on setting up the database connection using Sequelize ORM:
- Created the PostgreSQL database connection using Sequelize
- Set up environment variables for secure database credentials
- Implemented connection authentication with proper error handling
- Learned to properly start the application using npm scripts
- Fixed issues with the file path to the .env configuration

## Project Structure

```
pern/
├── Backend/
│   ├── app.js             # Main Express server file
│   ├── index.html         # HTML file
│   ├── package.json       # Backend dependencies
│   ├── models/
│   │   └── book.model.js  # Book data model
│   └── database/
│       ├── .env           # Environment variables
│       └── connection.js  # Database connection setup
└── README.md              # This documentation
```

## Technologies Used

- **Node.js** v22.11.0
- **Express.js** v5.1.0
- **PostgreSQL** (via Supabase)
- **Sequelize** v6.37.7
- **pg** v8.15.6

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/RohanPoudel2024/PERN-STACK.git
   cd pern
   ```

2. Install backend dependencies:
   ```
   cd Backend
   npm install
   ```

3. Set up environment variables:
   - Ensure the database/.env file has the correct PostgreSQL connection URI

4. Start the backend server:
   ```
   npm start
   ```

## Database Connection

The application uses Sequelize to connect to a PostgreSQL database hosted on Supabase. The connection is established in `database/connection.js`.

## Future Development

- Implement API endpoints
- Set up the React frontend
- Create user authentication
- Implement data models and relationships