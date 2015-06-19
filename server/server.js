///<reference path="../typings/node/node.d.ts"/>
///<reference path="../typings/express/express.d.ts"/>
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var config_1 = require("./config");
var readitem_1 = require("../server/models/readitem");
var port = process.env.PORT || 3000;
mongoose.connect(config_1.config.database);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(function (req, res, next) {
    for (var key in req.query) {
        req.query[key.toLowerCase()] = req.query[key];
    }
    next();
});
app.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});
var apiRoutes = express.Router();
apiRoutes.post('/newreaditem', function (req, res) {
    var newReadItem = new readitem_1.readitem({
        description: req.body.description,
        url: req.body.url,
        topic: req.body.topic,
        complete: req.body.complete,
        priority: req.body.priority,
        optional: req.body.optional
    });
    newReadItem.save(function (err) {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log('New item saved successfully');
        res.json({ success: true });
    });
});
apiRoutes.put('/readitem/:id', function (req, res) {
    return readitem_1.readitem.findById(req.params.id, function (err, readItem) {
        readItem.description = req.body.description;
        readItem.url = req.body.url;
        readItem.topic = req.body.topic;
        readItem.complete = req.body.complete;
        readItem.priority = req.body.priority;
        readItem.optional = req.body.optional;
        return readItem.save(function (err) {
            if (!err) {
                console.log("updated");
                return res.send({ success: true });
            }
            else {
                console.log(err);
            }
            return res.send(readItem);
        });
    });
});
apiRoutes.delete('/readitem/:id', function (req, res) {
    return readitem_1.readitem.findById(req.params.id, function (err, readItem) {
        return readItem.remove(function (err) {
            if (!err) {
                console.log("removed");
                return res.send({ success: true });
            }
            else {
                console.log(err);
            }
        });
    });
});
apiRoutes.get('/readitems', function (req, res) {
    readitem_1.readitem.find({}, function (err, items) {
        res.json(items);
    });
});
apiRoutes.get('/readitem/:itemid', function (req, res) {
    readitem_1.readitem.findById(req.params.itemid, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
});
apiRoutes.delete('/readitems', function (req, res) {
    readitem_1.readitem.find({}).remove(function (err, delRes) {
        res.json({ message: 'Deleted successfully.' });
    });
});
app.use('/api', apiRoutes);
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
//# sourceMappingURL=server.js.map