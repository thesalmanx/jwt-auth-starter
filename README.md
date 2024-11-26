# Express Application Setup Guide 🔐

Welcome to the Express Application! Follow this guide to set up your development environment and get the application up and running.

## Environment Setup

### 1- Install Dependencies
Ensure you have Node.js (v10.x or higher) installed, along with MongoDB.

### 2- Create a .env File
In the root of the project, create a .env file and add the following variables:

```bash
NODE_ENV=development
DB_STRING=<your database connection string>
DB_STRING_PROD=<your production database connection string>
```

### 3- Start MongoDB
Ensure your MongoDB database is running before starting the application.

- Option 1: Run MongoDB as a persistent background process.
- Option 2: Start MongoDB in the terminal by running:
```bash
mongod
```

## Generate Public/Private Key Pair
The application requires a public/private key pair for authentication. Use the included script to generate the keys:
```bash
node generateKeypair.js
```
- The private key will be ignored by Git, as specified in .gitignore.
- Ensure you do not share or commit your private key.

### Quickstart
1- Install the required dependencies:
```bash
npm install
```
2- Start the Express server:
```bash
node app.js
```
3- The server will run on http://localhost:8080 by default.


# Additional Notes
### Project Structure
1- app.js: The main entry point of the Express application.
2- generateKeypair.js: Script to create a public/private key pair for secure JWT authentication.
3- .gitignore: Ensures sensitive data such as the private key is not committed to version control.
4- .env: Stores environment variables for local development and production.

# Dependencies
This project uses the following dependencies:

- Express: For handling server-side routing and middleware.
- MongoDB: The database used to store application data.
- jsonwebtoken: For authentication and authorization using JSON Web Tokens.
- dotenv: To manage environment variables securely.

# Setup Checklist
- Install MongoDB and ensure it is running.
- Create a .env file and configure environment variables.
- Generate the key pair using generateKeypair.js.
- Start the Express server with node app.js.
