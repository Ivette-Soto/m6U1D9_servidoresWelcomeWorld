// Server libraries
const express = require('express');
const app = express();
const expHdbs = require('express-handlebars');
const fs = require('fs').promises;
const port = 3000
    app.listen(port, ()=>{
        console.log(`I'm listening.  Are you at port ${port} as well?`);
    });

// Render views by handlebars
    app.set("view engine", "handlebars");
    app.engine("handlebars", expHdbs.engine());    

    // app.get("/", (req, res)=>{
    //     res.render("");
    // });

    // app.get("/", (req, res)=>{
    //     res.render("");
    // });
    
    // app.get("/", (req, res)=>{
    //     res.render("");
    // });

    // app.get("/", (req, res)=>{
    //     res.render("");
    // });

// Query analysis by File System
    // fs.writeFile('fileName.txt', 'fileContent', 'utf8', ()=>{console.log('Archivo creado con éxito');});
    // fs.readFile('message.txt', 'utf8', ()=>{console.log('Archivo creado con éxito');});
    // fs.rename('mensaje.txt', 'message.txt', ()=>{console.log('Archivo creado con éxito');})
    // fs.unlink('message.txt', ()=>{console.log('Archivo creado con éxito');})