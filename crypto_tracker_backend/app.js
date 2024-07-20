const express = require('express');
const cors = require('cors');


const app = express(); //intitialising a server
app.use(express.json()); // Configuration to pass requests with JSON payloads
app.use(cors()); // To serve requests coming from any origin

const PORT = process.env.PORT || 4000;

app.get("/status",(request, response)=>{
    const status = {
        "Status" : "Running"
    }
    response.send(status);
});

//Starting a server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});