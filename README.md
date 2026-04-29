# 💬 Full Stack Chat Application

## 📌 Overview
This is a Full Stack Chat Application that enables real-time communication between users. The application allows users to register, log in, and exchange messages instantly in a secure environment.

It is built using modern web technologies and demonstrates real-time data handling, authentication, and full-stack development skills.

---

## 🚀 Features
- 🔐 User Authentication (Signup/Login)
- 💬 Real-time Messaging
- 🟢 Online/Offline Status (optional)
- 📩 One-to-one Chat System
- 🔄 Instant Message Updates
- 📱 Responsive Design

---

## 🛠️ Tech Stack
### Frontend:
- React.js
- Tailwind CSS

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB

### Other Tools:
- Socket.io (for real-time communication)
- JWT (for authentication)

---

## ⚙️ How It Works
1. User registers and logs into the application  
2. JWT authentication verifies the user  
3. Users can see other registered users  
4. Select a user to start chatting  
5. Messages are sent and received in real-time using Socket.io  
6. Chat history is stored in the database  

---

## 📂 Project Structure

📁 chatapp/
├── 📁 frontend/
├── 📁 backend/
├── docker-compose.yml  (optional, run both together)
├── .gitignore
└── README.md

⚛️ Frontend — React + Vite / Next.js
📁 frontend/
├── 📁 public/
│ └── logo.png
├── 📁 src/
│ ├── 📁 assets/  (images, icons, sounds)
│ │
│ ├── 📁 components/
│ │ ├── 📁 chat/
│ │ │ ├── ChatWindow.jsx  (main chat area)
│ │ │ ├── MessageBubble.jsx  (single message)
│ │ │ ├── MessageInput.jsx  (type & send)
│ │ │ └── TypingIndicator.jsx
│ │ ├── 📁 sidebar/
│ │ │ ├── Sidebar.jsx  (chat list)
│ │ │ ├── ChatListItem.jsx
│ │ │ └── SearchBar.jsx
│ │ ├── 📁 auth/
│ │ │ ├── Login.jsx
│ │ │ └── Register.jsx
│ │ └── 📁 ui/  (Button, Avatar, Modal, Spinner)
│ │
│ ├── 📁 pages/
│ │ ├── HomePage.jsx  (chat dashboard)
│ │ ├── LoginPage.jsx
│ │ └── ProfilePage.jsx
│ │
│ ├── 📁 hooks/
│ │ ├── useSocket.js  (Socket.IO connection)
│ │ ├── useAuth.js
│ │ └── useMessages.js
│ │
│ ├── 📁 context/
│ │ ├── AuthContext.jsx
│ │ └── ChatContext.jsx
│ │
│ ├── 📁 store/  (Redux / Zustand — optional)
│ │ ├── authSlice.js
│ │ ├── chatSlice.js
│ │ └── store.js
│ │
│ ├── 📁 services/
│ │ ├── api.js  (axios instance)
│ │ ├── authService.js
│ │ └── chatService.js
│ │
│ ├── 📁 utils/
│ │ ├── formatTime.js  (message timestamps)
│ │ └── constants.js
│ │
│ ├── 📁 styles/
│ │ ├── globals.css
│ │ └── chat.module.css
│ │
│ ├── App.jsx
│ └── main.jsx  (entry point)
├── .env  (VITE_API_URL, VITE_SOCKET_URL)
├── package.json
└── vite.config.js






🟢 Backend — Node.js + Express + Socket.IO
📁 backend/
├── 📁 src/
│ ├── 📁 config/
│ │ ├── db.js  (MongoDB connection)
│ │ └── socket.js  (Socket.IO setup)
│ │
│ ├── 📁 controllers/
│ │ ├── authController.js  (login, register, logout)
│ │ ├── messageController.js  (send, get messages)
│ │ └── userController.js  (profile, search users)
│ │
│ ├── 📁 models/
│ │ ├── User.js  (name, email, password, avatar, status)
│ │ ├── Message.js  (sender, receiver, text, seen, timestamp)
│ │ └── Conversation.js  (participants, lastMessage)
│ │
│ ├── 📁 routes/
│ │ ├── auth.routes.js  (/api/auth/*)
│ │ ├── message.routes.js  (/api/messages/*)
│ │ └── user.routes.js  (/api/users/*)
│ │
│ ├── 📁 middleware/
│ │ ├── authMiddleware.js  (JWT verify)
│ │ └── errorHandler.js
│ │
│ ├── 📁 socket/
│ │ ├── socketHandler.js  (on connect, disconnect)
│ │ └── events/  (sendMessage, typing, seen)
│ │
│ ├── 📁 services/
│ │ ├── tokenService.js  (JWT generate/verify)
│ │ └── uploadService.js  (Cloudinary / multer)
│ │
│ └── 📁 utils/
│ ├── generateToken.js
│ └── validateInput.js
│
├── 📁 uploads/  (local file storage)
├── 📁 tests/
│ ├── auth.test.js
│ └── message.test.js
├── .env  (PORT, MONGO_URI, JWT_SECRET)
├── .env.example
├── package.json
└── server.js  (entry point)

🗄️ Database — MongoDB Collections
📦 users  → _id, name, email, password, avatar, isOnline, lastSeen
📦 messages  → _id, sender, receiver, text, media, seen, createdAt
📦 conversations  → _id, participants[], lastMessage, updatedAt

Run the Backend
run :  npm start 
API runs on:http://localhost:4003

Run The Frontend
run :  npm start : npm run dev
The Vite app runs on:http://localhost:3001



 










