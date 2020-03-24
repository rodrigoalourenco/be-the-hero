const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Seman OmniStack 11.0',
        aluno: 'Rodrigo Lourenço'
    });
});

app.listen(3333);