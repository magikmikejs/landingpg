const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT);

app.use(express.static('client'));

app.get('/',(req,res)=>{
    res.sendFile('client/index.html', {root: __dirname })
});