const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


//Create 


//Read
app.get('/getAll', function(req, res) {
    res.json({success: true});
});

//update 


//delete 


app.listen((process.env.PORT || 5000), () => console.log(`listening on port 5000`));
