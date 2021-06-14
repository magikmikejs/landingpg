const express = require('express');
const app = express();

if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client'));

    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','index.html'));
    });

};

const PORT = process.env.PORT || 5000;

app.listen(PORT);