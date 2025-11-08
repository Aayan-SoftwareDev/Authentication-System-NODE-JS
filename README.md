# Node.js Authentication API

A simple authentication backend built with **Node.js** and **Express**, implementing **user sign-up**, **sign-in**, and **cookie-based session management**.

## Features
- User registration (sign-up)
- User login (sign-in)
- Cookie-based authentication
- Secure password hashing
- JSON API responses
- Express middleware for authentication

## Tech Stack
- **Node.js** – runtime environment  
- **Express.js** – web framework  
- **bcrypt** – password hashing  
- **cookie-parser** – cookie handling    
- **body-parser / express.json()** – request parsing  

## API Endpoints

### `POST /user/signup`
Registers a new user.  
**Body:**  
```json
{
  "username": "example",
  "password": "password123"
}
