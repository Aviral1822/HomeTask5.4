const express = require("express");
const app = express();
const cors = require("cors");
const router=require('./routes/user.routes').myrouter;


//const index = require("./routes/index");
//const userRoute = require("./routes/user.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());



//app.use(index);
/*app.get("/",(req,res)=>{
    res.send("Welcome To CRUD Operation Tutorial");
  });

*/

app.use("/api", router);

module.exports ={
  myapp:app
} 
