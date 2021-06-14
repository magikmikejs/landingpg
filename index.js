const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + 'client'));

app.get('*',(req,res)=>{
    res.sendFile('client/index.html', {root: __dirname })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);