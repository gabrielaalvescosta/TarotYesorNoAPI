const mysql = require('mysql');

// create here mysql connection

const logar = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_mysql_crud_db'
});

logar.connect(function(error){
    if(error) throw error;
    console.log('Banco de dados conectado!');
})

module.exports = logar;