///<reference path="../typings/node/node.d.ts"/>
///<reference path="../typings/express/express.d.ts"/>

// =======================
// get the packages we need ============
// =======================
import * as express from "express";
var app: express.Express = express();

import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as mongoose from "mongoose";

import { config } from "./config"; // get our config file
import { readItem } from "models/readitem"; // get our mongoose model
    
// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// insert this before your routes
app.use((req, res, next)  => {
  for (var key in req.query)
  { 
    req.query[key.toLowerCase()] = req.query[key];
  }
  next();
});

// =======================
// routes ================
// =======================
// basic route
app.get('/',(req, res) => {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// API ROUTES -------------------
// get an instance of the router for api routes
var apiRoutes = express.Router(); 

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/newreaditem', (req, res) => {
  // create a new readitem
  var newReadItem = new readItem({ 
    title: req.body.title,
    description: req.body.description,
    url: req.body.url, 
    topic: req.body.topic,
    priority: req.body.priority,
    optional: req.body.optional 
  });
    
      // save the new item
      newReadItem.save((err) => {
        if (err)
        {
          console.log(err);
          throw err;
        } 
    
        console.log('New item saved successfully');
        res.json({ success: true });
     });
   });



// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);



// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
