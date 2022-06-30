//const router = require("express-promise-router")();



//const { route } = require(".");
//const userController = require("../controllers/usercontroller");

const express=require('express');
const router=express.Router();
const db = require("../Db/database");

const createUser = async (req, res) => {
    const { id, login, password, age, isdeleted } = req.body;
    const { rows } = await db.query(
      "INSERT into Users (id, login, password, age, isdeleted) values ($1, $2, $3, $4, $5)",
      [id, login, password, age, isdeleted]
    );
  
    res.status(200).send({
      message: "User Added successfully",
      body: {
        user: { id, login, password, age, isdeleted },
      },
    });
  };
  
  const listAllUsers = async (req, res) => {
    const response = await db.query(
      "SELECT * from users where isdeleted=false order by id"
    );
    res.status(200).send(response.rows);
  };
  
  const findUsersById = async (req, res) => {
    const id = req.params.id;
    const response = await db.query(
      "SELECT * from users where id= $1 and isdeleted=false",
      [id]
    );
  
   console.log(response.rows);
    res.status(200).send(response.rows);
    
  };
  
  const updateUserById = async (req, res) => {
    const Usreid = req.params.id;
    const { id, login, password, age, isdeleted } = req.body;
  
    const response = await db.query(
      "UPDATE users SET login = $1, password = $2, age = $3, isDeleted = $4 where id=$5",
      [login, password, age, isdeleted, id]
    );
  
    res.status(200).send({ message: "User updated successfully" });
  };
  
  const deleteUserById = async (req, res) => {
    const userId = req.params.id;
    const { id, login, password, age, isDeleted } = req.body;
  
    const response = await db.query(
      "UPDATE users SET isdeleted = true where id=$1",
      [id]
    );
  
    res.status(200).send({ message: "User deleted successfully" });
  };
  

router.post("/usersave", createUser);

router.get("/usergetall", listAllUsers);

router.get("/usergetbyid/:id", findUsersById);

router.put("/userupdate/:id", updateUserById);

router.delete("/userdelete/:id", deleteUserById);

module.exports = {
    myrouter:router
}
