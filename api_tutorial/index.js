const express = require("express");
const app = express();
const PORT = 3000;
// ROTAS DA RAIZ /
app.get("/",(request, response) => {
    response.send("Hello World!");
});

app.post("/", (request, response) => {
    response.send("Método POST");
});

app.put("/", (request, response) => {
    response.send("Método PUT");
});

app.delete("/", (request , response) => {
    response.send ("Método DELETE");
});

// Banco de dados
const users = [
    { id: 1, name: "Pedro", email: "pedro@email.com" },
    { id: 2, name: "João", email: "joao@email.com" },
    { id: 3, name: "Marcos", email: "marcos@email.com" },
];

// Rotas usuario "/users"

app.get ("/users/:id",(req, res) => {
    const user_id = req.params.id;
    console.log(user_id);
    const user = users.find(user => user.id === user_id);
    
if (!user) {
        res.status(404).json({message: "User not found!"});
    }

    res.joson(user);
});


app.get ("/users",(req, res) => {

});
app.get ("/users",(req, res) => {

});
app.get ("/users",(req, res) => {

});


app.listen(PORT, () => console.log("O servidor está rodando..."));