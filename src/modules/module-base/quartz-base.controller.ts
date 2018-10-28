
import url = require('url');
import querystring = require('querystring');

import { IWebServiceController } from "../module-web-service/interfaces/quartz-web-service.interface";
import { QuartzBaseModule } from "./quartz-base.module";
import { Router } from "express";

export class QuartzBaseController implements IWebServiceController {

    protected _router: Router;
    protected _parent: QuartzBaseModule;

    constructor(parent: QuartzBaseModule) {
        this._parent = parent;
    }

    async scrutanize(...args: any[]) {
        this._router.get('/', (req, res, next) => {
            res.json({
                'type': 'echo',
                'method': 'GET'
            });
        });

        this._router.post('/', (req, res, next) => {
            res.json({
                'type': 'echo',
                'method': 'POST'
            });
        });

        this._router.put('/', (req, res, next) => {
            res.json({
                'type': 'echo',
                'method': 'PUT'
            });
        });

        this._router.delete('/', (req, res, next) => {
            res.json({
                'type': 'echo',
                'method': 'DELETE'
            });
        });
    }

    setRouter(router: Router) {
        this._router = router;
    }

    protected parseParameters(request) {
        if (request) {
            const parsedRequest = this.parseUrl(request.url);
            return this.parseQuery(parsedRequest.query);
        } else { return {}; }
    }

    protected parseBody(request) {
        if (request) {
            return request.body;
        } else { return  {}; }
    }


    protected parseUrl(urlStr: string) {
        return url.parse(urlStr);
    }

    protected parseQuery(query: string) {
        return querystring.parse(query);
    }

}