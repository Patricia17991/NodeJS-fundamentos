const express = require('express');

const app = express();

app.get("/courses", (request, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ]); //o método send permite enviar uma msg para quem esta requisitando 
})


app.post("/courses", (request, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ])
});

app.put("/courses/:id", (request, response) => {
    return response.json([
        "Curso 6",
        "Curso 2",
        "Curso 3"
    ])
});


app.patch("/courses/:id", (request, response) => {
    return response.json([
        "Curso 1",
        "Curso 7",
        "Curso 3"
    ])
});

app.delete("/courses/:id", (request, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
      
    ])
});


//para o express funcionar precisamos definir uma porta onde a nosssa aplicação vai estar rodando
app.listen(3333); //startando a nossa aplicação

//na maioria das vezes vamos usar a função de json em vez do send pq os retornos são no formato de json
