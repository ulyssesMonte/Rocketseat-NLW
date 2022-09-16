import express from 'express';


const app = express()
const http = require("http");


http.createServer(express).listen(3000, () => console.log("Servidor rodando local na porta 3000"));