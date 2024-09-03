const express =  require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./connectDb");
//config dot env file
dotenv.config();


connectDb();
//rest object
const app = express()

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
// app.get("/",(req,res)=>{
//     res.send("<h1>Hello from Server</h1>");
// })
app.use('/api/v1/users',require('./routes/userRoute'))
//transaction routers
app.use('/api/v1/transactions',require("./routes/transactionRoutes"))

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT,() =>{
    console.log('Server is running on port',PORT);
});