const express = require('express');

const app = express();

app.get("/", (request, response) => {
    return response.send("Hello World!"); //o método send permite enviar uma msg para quem esta requisitando 
})

//para o express funcionar precisamos definir uma porta onde a nosssa aplicação vai estar rodando
app.listen(3333) //startando a nossa aplicação

//na maioria das vezes vamos usar a função de json em vez de send()
