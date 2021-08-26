const express = require("express");
const router = express.Router();

//Importando o controller 
const usersControllers = require ("../controllers/userscontrollers")


// Rotas usuario "/users"
router.get("/", usersControllers.getAllUsers); 
   


// Obter um usuario em especifico
router.get ("/: id", usersControllers.createUser);



//Atualizar as informacões do usuario

router.put ("/:id", usersControllers.updateUser);


// Remover usuario
router.delete ("/:id",usersControllers.deleteUser);

module.exports = router;
