import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import AppRouter from './src/routes/index.js'

dotenv.config()

//middle ware
app.use(express.json());
app.use(cors());
app.use('/api',studentMentorRouter)
connectDB();
//routes
app.get("/", (req, res) => {
  res.status(200).send("API running Successfully");
});

app.listen(process.env.PORT, () => {
  console.log("App is running");
});