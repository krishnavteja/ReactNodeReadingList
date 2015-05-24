// get an instance of mongoose and mongoose.Schema
import * as mongoose from "mongoose";
import { IreadItemModel } from "./interfaces/Ireaditem";

var readItemSchema: any = new mongoose.Schema({
    title: { type: String, required: true, index: { unique: true } },
    url: { type: String, required: false },
    description: { type: String, required: false },
    topic: { type: String, required: true },
    priority: { type: Number, required: true, default: 10 },
    optional: { type: Boolean, default: false}
});

var readItem = mongoose.model<IreadItemModel>("readItem", readItemSchema);

export { readItem };
