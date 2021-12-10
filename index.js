const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => { 
    res.send('Olá Mundo!');
});


app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port} http://localhost:${port}`);
});