const express = require('express');

const app = express();

app.get("/courses", (request, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ]); //o método send permite enviar uma msg para quem esta requisitando 
})

//para o express funcionar precisamos definir uma porta onde a nosssa aplicação vai estar rodando
app.listen(3333); //startando a nossa aplicação

//na maioria das vezes vamos usar a função de json em vez do send pq os retornos são no formato de json
