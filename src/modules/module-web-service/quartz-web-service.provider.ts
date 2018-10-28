import * as http from 'http';
import { QuartzBaseProvider } from "../module-base/quartz-base.provider";
import { QuartzBaseModule } from "../module-base/quartz-base.module";

export class QuartzWebServiceProvider extends QuartzBaseProvider {

    protected _server: http.Server;
    protected _port: any;

    constructor(module: QuartzBaseModule) {
        super(module);
    }

}