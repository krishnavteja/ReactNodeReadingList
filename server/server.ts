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
import { readitem } from "../server/models/readitem"; // get our mongoose model
    
// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8888; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database

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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API ROUTES -------------------
// get an instance of the router for api routes
var apiRoutes = express.Router(); 

// route to authenticate a user (POST http://localhost:8080/api/newreaditem?description=xyz...)
apiRoutes.post('/newreaditem', (req, res) => {
  // create a new readitem
  var newReadItem = new readitem({ 
    description: req.body.description,
    url: req.body.url, 
    topic: req.body.topic,
    complete: req.body.complete,
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
   
 apiRoutes.put('/readitem/:id', function (req, res){
  return readitem.findById(req.params.id, function (err, readItem) {
    readItem.description = req.body.description;
    readItem.url = req.body.url;
    readItem.topic = req.body.topic;
    readItem.complete = req.body.complete;
    readItem.priority = req.body.priority;
    readItem.optional = req.body.optional;
    
    return readItem.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      return res.send(readItem);
    });
  });
});

apiRoutes.delete('/readiitem/:id', function (req, res){
  return readitem.findById(req.params.id, function (err, readItem) {
    return readItem.remove(function (err) {
      if (!err) {
        console.log("removed");
        return res.send('');
      } else {
        console.log(err);
      }
    });
  });
});



// route to return all items (GET http://localhost:8080/api/readitems)
apiRoutes.get('/readitems', (req, res) => {
  readitem.find({}, (err, items) => {
    res.json(items);
  });
});  

// route to return all items (GET http://localhost:8080/api/readitems)
apiRoutes.get('/readitem/:itemid', (req, res) => {
  readitem.findById(req.params.itemid, function(err, item) {
            if (err)
                res.send(err);
            res.json(item);
  });
});

// route to delete all items (DELETE http://localhost:8080/api/readitems)
apiRoutes.delete('/readitems', (req, res) => {
  readitem.find({}).remove((err, delRes) =>{
    res.json({ message: 'Deleted successfully.'});
  })
});

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);



// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
