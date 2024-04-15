const express = require('express');

const mysql = require('mysql2');

const cors = require('cors');

const app = express();

const mysql_config = require('./mysql_config');

const functions = require('./functions');

// const { connect } = require('http2');

app.listen(3000,()=>{
    console.log("Servidor no ar!");
})

app.use(cors());

const connection = mysql.createConnection(mysql_config);

app.get('/',(req,res)=>{
    connection.query('SELECT * FROM tasks',(err,results)=>{
        if(err){
            res.json(functions.responde('Erro',"Erro: "+err.message))
        }else{
            res.json(functions.response('Tasks listadas com sucesso!', results))
        }
    })
})

