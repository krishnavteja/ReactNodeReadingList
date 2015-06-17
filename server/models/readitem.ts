// get an instance of mongoose and mongoose.Schema
import * as mongoose from "mongoose";
import { IreadItemModel } from "./interfaces/Ireaditem";

var readItemSchema: any = new mongoose.Schema({
    url: { type: String, required: false },
    description: { type: String, required: false },
    topic: { type: String, required: true },
    complete: { type: Boolean, default: false },
    priority: { type: Number, default: 10 },
    optional: { type: Boolean, default: false}
});

var readitem = mongoose.model<IreadItemModel>("readitem", readItemSchema);

export { readitem };

