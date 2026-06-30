# AI Habit Tracker

An AI-powered Habit Tracker that helps users build, monitor, and improve daily habits with intelligent insights, progress tracking, and personalized recommendations.

## 🚀 Features

* User Authentication
* Create, Update, and Delete Habits
* Daily Habit Tracking
* Progress Dashboard
* Streak Tracking
* AI-Based Habit Suggestions
* Personalized Recommendations
* Responsive User Interface
* Secure Backend API
* Database Integration

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Tokens)
* bcrypt

### AI Integration

* OpenAI API 

---

## 📂 Project Structure
## 📂 Project Structure

```text
Ai-habit-tracker/
├── Backend/                 # Node.js + Express API Server
│   ├── config/              # Database connection (MongoDB) & AI configs
│   ├── controllers/         # Request logic (authController, habitController, aiController)
│   ├── middleware/          # Auth verification (JWT), error handlers
│   ├── models/              # Mongoose Schemas (User.js, Habit.js, AIRecommendation.js)
│   ├── routes/              # Express API endpoints mapped to controllers
│   ├── utils/               # Gemini AI SDK integration layer, token utilities
│   ├── .env                 # Environment secrets (PORT=8000, MONGO_URI, GEMINI_API_KEY)
│   ├── index.js             # Server entry point
│   └── package.json         # Backend dependencies (express, mongoose, dotenv, cors)
│
├── Frontend/                # React Client via Vite
│   ├── public/              # Static assets (favicons, etc.)
│   ├── src/                 # Application source code
│   │   ├── components/      # Reusable UI elements (Navbar, HabitCard, StatBox)
│   │   ├── context/         # React Context API (AuthContext, ThemeContext)
│   │   ├── pages/           # View layouts (Dashboard, Analytics, Login, Register)
│   │   ├── services/        # Centralized Axios API instances pointing to VITE_API_URL
│   │   ├── App.jsx          # Main application router and shell
│   │   └── main.jsx         # Client entry point
│   ├── index.html           # Main HTML document
│   ├── package.json         # Frontend dependencies (react, react-router-dom, axios)
│   └── vite.config.js       # Vite configuration environment
│
├── .gitignore               # Ignored files (node_modules, .env files)
├── package-lock.json        # Unified dependency lockfile
└── README.md                # Documentation (This file)

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Manjoor-Alam29/Ai-habit-tracker.git
cd Ai-habit-tracker
```

### Install Dependencies

Backend:

```bash
cd server
npm install
```

Frontend:

```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables


frontend 
```env
VITE_API_URL=http://localhost:8000/api


Backend .env

PORT=8000
MONGO_URI=
JWT_SECRET=
GEMINI_API_KEY=
CLIENT_URL=


---

## ▶️ Run the Application

Backend

```bash
cd server
npm run dev
```

Frontend

```bash
cd client
npm start
```

---

## 📈 Future Improvements

* AI habit coaching
* Reminder notifications
* Calendar integration
* Mobile application
* Social habit challenges
* Gamification and rewards
* Weekly AI reports

---



## 👨‍💻 Author

**Manjoor Alam**

GitHub: https://github.com/Manjoor-Alam29
