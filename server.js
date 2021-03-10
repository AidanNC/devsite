'use strict';
//import * as _dotenv from "dotenv";
import express from 'express';
import * as _path from "path";
const path = _path["default"];
const app = express();
app.use(express.json());
app.use(express.urlencoded({ 'extended': true }));
app.use('/', express.static('./client'));


//the mainpage
app.get('/',(req,res)=>{
    res.redirect('/main');
});

app.get('/main',(req, res) => res.sendFile('main.html', { root: './client' }));

let port = 8080;
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});