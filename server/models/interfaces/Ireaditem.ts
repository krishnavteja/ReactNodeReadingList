///<reference path="../../../typings/mongoose/mongoose.d.ts"/>

import * as mongoose from "mongoose";

interface IreadItem {
    description: string;
    url: string;
    topic: string;
    priority: number;
    optional: boolean;
    complete: boolean;
}

interface IreadItemModel extends IreadItem, mongoose.Document { }

export { IreadItemModel }
