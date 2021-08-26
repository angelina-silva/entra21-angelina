const users = require("../models/user");

function getAllUsers(req, res, next) {
    res.json(users);

}

function getUserById(req, res, next) {
    const user_id = req.params.id;
  
    const user = users.find(user => user.id == user_id);
    
if (!user) {
        res.status(404).json({message: "User not found!"});
    }

    res.json(user);
}

function createUser(req, res , next){
    const { id, name, email } = req.body;
    // Verificando se o email ja esta cadastrado
        const userAlreadyExists = users.find(user => user.email === email);
    
        if (userAlreadyExists){
          return  res.status(409).json({ message: "User already exists"});
        }
        const user = { id , name, email };
    // Inserindo o usuario
        users.push(user);
    
        res.status(201).json(user);
}

function updateUser(req, res, next){
    const { name } = req.body;
    const userId = req.params.id;

    const user = users.find(user => user.id == userId);

    if (!user){
        return res.status(404).json({ message : "User not found"});
    }
    user.name = name;
}

function deleteUser(req, res, next){
    const userId = req.params.id;
    const userIdDb = users.findIndex(user => user.id == userId);

    if (userIdDb < 0) {
     return res.status(204).json({ message: "User not found"});
    }
     users.splice(userIdDb, 1);

     res.status(204).end();
}
module.exports = {
    getAllUsers,
    getUserById
};
