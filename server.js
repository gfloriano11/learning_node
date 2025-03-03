const { error } = require('console');
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 8000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fee_management'
});

connection.connect(error => {
    if(error){
        console.log('deu erro', error);
        return;
    }

    console.log('conectado');
})

app.get('/', (req, res) => {
    connection.query('SELECT * FROM fee', (error, result) => {
        if(error){
            res.status(500).json({error: 'erro na connection'});
            return;
        }
        res.json(result);
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});