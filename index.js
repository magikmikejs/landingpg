const express = require('express');
const app = express();

if(process.env.NODE_ENV === 'production'){

    app.use(express.static(__dirname + 'client'));

    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile('client/index.html', {root: __dirname })
    });

};

const PORT = process.env.PORT || 5000;

app.listen(PORT);