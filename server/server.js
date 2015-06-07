///<reference path="../typings/node/node.d.ts"/>
///<reference path="../typings/express/express.d.ts"/>
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var config_1 = require("./config");
var readitem_1 = require("../server/models/readitem");
var port = process.env.PORT || 8888;
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
var apiRoutes = express.Router();
apiRoutes.post('/newreaditem', function (req, res) {
    var newReadItem = new readitem_1.readitem({
        title: req.body.title,
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
apiRoutes.get('/readitems', function (req, res) {
    readitem_1.readitem.find({}, function (err, items) {
        res.jsonp(items);
    });
});
apiRoutes.get('/readitem/:itemid', function (req, res) {
    readitem_1.readitem.findById(req.params.itemid, function (err, item) {
        if (err)
            res.send(err);
        res.jsonp(item);
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