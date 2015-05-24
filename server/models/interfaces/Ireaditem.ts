///<reference path="../../../typings/mongoose/mongoose.d.ts"/>

import * as mongoose from "mongoose";

interface IreadItem {
    title: string;
    description: string;
    url: string;
    topic: string;
    priority: number;
    optional: boolean;
}

interface IreadItemModel extends IreadItem, mongoose.Document { }

export { IreadItemModel }
