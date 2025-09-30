const express = require("express");
const cors = require("cors");
// const helmet = require("helmet");
// const rateLimit = require("express-rate-limit");
// const mongoSanitize = require("mongo-sanitize");
// const hpp = require("hpp");
// const connectDB = require("./src/config/db");
const dotenv = require("dotenv");
// const { body } = require("express-validator");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/auth/signup',(req,res)=>{
    const user=req.body;
console.log(user);
res.send(user);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
