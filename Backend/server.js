import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import habitRoutes from './routes/Habit.js';
import logRoutes from './routes/log.js';
import aiRoutes from './routes/ai.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();



let isconneted = false;
    async function connectToDB() {
     try{
          await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,         
     });
     isconneted = true;
     console.log('Connected to MongoDB');
     }
     catch (error) {
        console.error('Error connecting to MongoDB:', error);
     }
    }
  






const allowedOrigins = (process.env.CLIENT_URL || '')
    .split(',') 
    .map((s)=> s.trim())  
    .filter(Boolean);

const corsOptions = {
  origin(origin, cb) {
    // Allow requests with no origin (curl, same-origin, server-to-server)
    if (!origin) return cb(null, true);
    
    // Allow any localhost / 127.0.0.1 origin in development
    if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
      return cb(null, true);
    }
    
    // Allow anything explicitly listed in CLIENT_URL (comma-separated)
    if (allowedOrigins.includes(origin)) return cb(null, true);
    return cb(new Error(`Origin ${origin} not allowed by CORS`));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json({ limit: "1mb" }));
app.use(express.json());



app.get("/api/health", (req, res) =>
  res.json({ status: "ok", time: new Date().toISOString() })
);

// ------------------Routes-------------
 app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/ai", aiRoutes);


app.use(notFound);
app.use(errorHandler);

// const PORT = process.env.PORT || 8000;

// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
//   });
// });
    //adding middleware
    app.use((req, res, next) => {
      if (!isconneted) {
        connectToDB().then(() => next());
      }
    });

// Your routes
// app.get("/", (req, res) => {
//     res.json({ message: "API is working" });
// });

export default app;
