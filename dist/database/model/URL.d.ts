/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { Typegoose } from '@hasezoey/typegoose';
export declare class URL extends Typegoose {
    hash: string;
    originURL: string;
    shortURL: string;
}
export declare const URLModel: import("mongoose").Model<import("@hasezoey/typegoose").InstanceType<URL>, {}, {}, {}> & URL & typeof URL;
