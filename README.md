# PERN Stack Project

## Repository

[GitHub Repository](https://github.com/RohanPoudel2024/PERN-STACK.git)

## Table of Contents

- [Project Overview](#project-overview)
- [My Learning Journey](#my-learning-journey)
  - [Day 11 Progress](#day-11-progress)
  - [Day 10 Progress](#day-10-progress)
  - [Day 9 Progress](#day-9-progress)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Database Connection](#database-connection)
- [API Endpoints](#api-endpoints)
- [Future Development](#future-development)

## Project Overview

A full-stack web application built with the PERN stack:
- **PostgreSQL** for the database
- **Express.js** as the backend framework
- **React.js** for the frontend (to be implemented)
- **Node.js** as the runtime environment
- **Sequelize** as the ORM for database management

## My Learning Journey

### Day 11 Progress

Today I implemented API endpoints for the books database:
- Created a GET endpoint to fetch all books using async/await with Sequelize
- Implemented a POST endpoint to add new books to the database
- Learned how to handle JSON data in Express with middleware
- Practiced using async/await for database operations
- Structured API responses with proper JSON formatting

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
pern-stack/
├── Backend/
│   ├── app.js             # Main Express server file with API routes
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

## API Endpoints

- **GET /books** - Fetches all books from the database
- **POST /books** - Creates a new book entry with the provided data

## Future Development

- Implement remaining CRUD operations (PUT, DELETE)
- Add data validation
- Implement error handling
- Set up the React frontend

