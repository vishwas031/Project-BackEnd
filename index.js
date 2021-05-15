const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.status(200).send("Server is up and Running!!");
});



app.listen(port,()=>{
    console.log(`server is running o port : ${port}`);
});