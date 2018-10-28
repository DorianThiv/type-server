
import express from 'express';
import * as bodyParser from 'body-parser';
import { WebServiceScrutanizer } from './WebServiceScrutanizer.class';

export class WebService {

    public express: any;
    
    private _scrutanizer: WebServiceScrutanizer;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }


    private routes(): void {
        this._scrutanizer = new WebServiceScrutanizer(express.Router());
        this._scrutanizer.scrutanize();
        this.express.use('/', this._scrutanizer.router);
    }

}