# 💰 PocketBook – Expense Tracker App

PocketBook is a cross-platform expense tracking application built with **React Native** and **Node.js (Express)**.  
It helps users efficiently manage their **income, expenses, and balance**, with visual summaries and a clean, user-friendly interface.

---

## 📱 Features

- ✅ **User Authentication** – Secure login and sign up functionality.  
- 💵 **Add Transactions** – Easily add income and expense entries.  
- 📊 **Transaction Summary** – View total income, total expenses, and current balance.  
- 🔁 **Real-time Updates** – Instantly reflects new transactions and summaries.  
- 🧾 **Transaction History** – Filter and view all past transactions by type or date.  
- 🌈 **Clean UI** – Built with responsive and intuitive design for both Android and iOS.  

---

## 🧠 Tech Stack

### **Frontend**
- React Native with Expo 

### **Backend**
- Express.js 
- Node JS 
- Clerk for authentication 
- Neon Postgres for database
- (Optional) Upstash Redis for rate limiting  

---

## ⚙️ Installation & Setup

### 🔹 Prerequisites
Make sure you have installed:
- Node.js (v18+)
- VSCode 
- Android Studio / Genymotion for emulator

---

### 1. Clone the Repository
   ```bash
   git clone https://github.com/Adeen-Ayub-Vine/ReactNative-PocketBook.git
   cd PocketBook
   ```

### 2. Install dependencies

   ```bash
   npm install
   ```

### 3. Add .env file in backend

PORT=5001

DATABASE_URL=your_postgres_connection_string

(OPTIONAL)
UPSTASH_REDIS_REST_URL="your_redis_url"
UPSTASH_REDIS_REST_TOKEN="your_redis_token"

### 4. Add .env file in frontend

EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_key"

### 5. Add API_URL file in frontend/constants/api_url.ts

export const API_URL = "http://(localhost or your IP):5001/api";

### 6. Start the App

   ```bash
   cd backend
   npm run local
   ```

   ```bash
   cd frontend
   npm run start
   ```
