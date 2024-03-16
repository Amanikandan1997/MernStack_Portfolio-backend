
//express is used to start the server at some port 
const express =   require('express');
const app = express(); 
//process .env is used to get the secrete code fro .env
require ('dotenv').config()
const PORT=  process.env.PORT;

//mongodb setup

const mongoose =   require("mongoose");

mongoose.connect(process.env.DATABASE,{ useNewurlParser:true ,useUnifiedTopology:true} )
 
        .then(()=> console.log("Database Connected",process.env.DATABASE))
        .catch((err)=>console.log(err));

const bodyparser  = require("body-parser");
app.use(bodyparser.json());

//cors config
const cors = require( 'cors' );
app.use(cors());


//middleware



app.get ('/get',(request,response) =>{
    response.send("Hi iam server");
});

const infoRouter  = require('./router');


const morgan = require('morgan');
app .use(morgan('dev'));


app.use(express.json());
app.use('/info',infoRouter);



//port is running on the port
app.listen(PORT, () => console.log (`Server running on  ${PORT}` ));
//body parser middleware is used for parsing request body
app.use (express.json());