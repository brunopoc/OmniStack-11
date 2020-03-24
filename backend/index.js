const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        event: 'Semana OmniStack 11',
        aluno: 'Bruno Cabral'
    });
})

app.listen(4000);