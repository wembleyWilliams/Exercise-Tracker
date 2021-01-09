const express = require('express');
const cors = require('cors');

//To connect to the MongDB 
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUriParser: true, useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection successfully established")
})

//This starts the server listening on a certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);

});