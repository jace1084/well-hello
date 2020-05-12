const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.json({limit: '10000kb'})); // for parsing application/json -- Change to higher limit with images to allow a POST
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

   //enable CORS
   app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
  });

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "orchids_db"
  });


  // var orchidRoutes = require("./Routes/orchids.js");
  // var galleryRoutes = require("./Routes/images.js");
  

  // app.use("/");
  
  




app.set("view engine", "ejs");

  app.listen(3001, () => {
      console.log('listening on port 3001')
  });
