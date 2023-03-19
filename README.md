# This is a boilerplate for a NestJS application with some basic configuration to help you get started quickly.

# Getting Started

Clone this repository to your local machine:

git clone https://github.com/tolux/wallet-system.git
Install the required dependencies using yarn:

# Copy code

cd wallet-system
yarn add
Configure the database connection by editing the .env file:

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_DATABASE=my-nestjs-app

yarn start:dev
The application should now be running at http://localhost:3000.

The app start with an admin seeded into the database , see src/constact/app.config.ts for info on the default admin details

# Scripts

start:dev: Starts the application in development mode using ts-node and nodemon.

build: Compiles the TypeScript code to JavaScript in the dist directory.

start: Starts the application in production mode using the compiled JavaScript code.

# Technologies Used

NestJS
TypeScript
MySql2
passport
passport-jwt"
typeorm
class-validator
jsonwebtoken
class-transformer
jwt
bcryptjs
