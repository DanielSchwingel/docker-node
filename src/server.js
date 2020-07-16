const express = require('express');
const app = express();

const PORT = 3333;
const HOST = '0.0.0.0';

app.get('/', (req,res)=> {
    res.send('Hello world from Docker!');
})

app.listen(PORT, HOST, ()=>{
    console.log(`Server is running on the port ${PORT}`);
})