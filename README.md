# Budget Planner Backend

This is the Node.js + Express backend for the Personal Budget Planner app. It handles user authentication (sign-up & login) and connects to MongoDB Atlas to store user data.

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- Render (for deployment)

## 📁 Features

- ✅ Signup with hashed password storage
- ✅ Login with JWT token generation
- ✅ MongoDB user model with Mongoose
- ✅ CORS enabled for frontend integration
- ✅ Environment variables stored via `.env`

## 📦 Routes

| Route           | Method | Description           |
|-----------------|--------|-----------------------|
| `/api/auth/signup` | POST   | Create a new user       |
| `/api/auth/login`  | POST   | Authenticate a user     |

## 🌐 Live API

Hosted on:  
[`https://budget-backend-73iq.onrender.com`](https://budget-backend-73iq.onrender.com)

## 🔐 Environment Variables (Render)

Make sure to configure these in your Render dashboard under **Environment**:

```env
MONGO_URI=<your MongoDB Atlas connection string>
JWT_SECRET=yourSecretKey

Run Locally

bash
cd budget-backend
npm install
npm start
