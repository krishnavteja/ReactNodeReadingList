var mongoose = require("mongoose");
var readItemSchema = new mongoose.Schema({
    title: { type: String, required: true, index: { unique: true } },
    url: { type: String, required: false },
    description: { type: String, required: false },
    topic: { type: String, required: true },
    priority: { type: Number, required: true, default: 10 },
    optional: { type: Boolean, default: false }
});
var readItem = mongoose.model("readItem", readItemSchema);
exports.readItem = readItem;
//# sourceMappingURL=readitem.js.map