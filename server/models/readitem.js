var mongoose = require("mongoose");
var readItemSchema = new mongoose.Schema({
    title: { type: String, required: true, index: { unique: true } },
    url: { type: String, required: false },
    description: { type: String, required: false },
    topic: { type: String, required: true },
    complete: { type: Boolean, default: false },
    priority: { type: Number, default: 10 },
    optional: { type: Boolean, default: false }
});
var readitem = mongoose.model("readitem", readItemSchema);
exports.readitem = readitem;
//# sourceMappingURL=readitem.js.map