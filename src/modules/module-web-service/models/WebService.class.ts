
import express from 'express';
import * as bodyParser from 'body-parser';

export class WebService {

    public express: any;

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
        // this.urlResolver = UrlResolverService.getInstance(this.express.Router());    
        // this.urlResolver.scrutanize();

        // this.express.use('/', this.urlResolver.router);
    }

}

export default new WebService().express;