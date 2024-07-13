<div align="center">
  <h1>Wilderness Wonders Server</h1>
</div>

---

## Introduction

Welcome to the Wilderness Wonders Server! This project serves as the backend for the Wilderness Wonders e-commerce website type of Campers shop, providing essential API endpoints and database connections for the application.

## Project Description

The Wilderness Wonders Server is built to support the Wilderness Wonders e-commerce platform, specifically designed for camping enthusiasts. It handles various backend operations, including database interactions, API routing, and server-side logic.

## Features

- RESTful API endpoints for managing products, orders, and user data.
- Connection to MongoDB for data storage.
- Environment configuration for flexible deployment.
- Code linting and formatting tools for maintaining code quality.

## Technology Stack

- **Express**: Web framework for Node.js to handle routing and server-side logic.
- **Mongoose**: ODM library for MongoDB to manage data models.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Zod**: TypeScript-first schema declaration and validation.
- **Prettier**: Code formatter for consistent styling.
- **ESLint**: Linter for identifying and fixing problems in your code.
- **dotenv**: Module for loading environment variables from a `.env` file.

## Installation Guideline

Follow these steps to get the project running locally on your machine.

### Prerequisites

- **Node.js**: Make sure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: A MongoDB instance is required. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based database.

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/JiJetu/Wilderness-Wonders-Server.git

   ```

2. **Navigate to the Project Directory**

   ```bash
   cd wilderness-wonders-server

   ```

3. **Install Dependencies**

   ```bash
   npm install

   ```

4. **Build the Project**

   ```bash
   npm run build

   ```

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add necessary configuration variables in the `.env` file.
   Example:
   ```bash
    PORT=5000
    DB_URL=your_db_connection_uri
    API_KEY=your_api_key_here
   ```
3. Adjust Configuration as Needed

   Ensure the DB_URL is correctly set to your MongoDB connection string. Adjust the PORT if necessary.

## Usage

1. **Start the Development Server**

   ```bash
   npm run start:dev

   ```

2. **Start the Production Server**

   ```bash
   npm run start:prod

   ```

3. **Lint and Fix Code**

   ```bash
   npm run lint
   npm run lint:fix


   ```

4. **Format Code**

   ```bash
   npm run prettier
   npm run prettier:fix


   ```
