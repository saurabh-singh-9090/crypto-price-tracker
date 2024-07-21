const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');

const connectDB = require('./config/db');
const { startCronJob, startInterval } = require('./jobs/dataCronJob');


const app = express(); //intitialising a server
app.use(express.json()); // Configuration to pass requests with JSON payloads
app.use(cors()); // To serve requests coming from any origin

const PORT = process.env.PORT || 5000;

app.use('/data', dataRoutes);

app.get("/status",(request, response)=>{
    const status = {
        "Status" : "Running"
    }
    response.send(status);
});

async function startServer() {
  await connectDB();
//   startCronJob();
     startInterval();
     
  //Starting a server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();