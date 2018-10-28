import * as http from 'http';
import * as debug from 'debug';

import WebService from './models/WebService.class';
import { QuartzBaseModule } from "../module-base/quartz-base.module";
import { IWebServiceConfiguration } from "./interfaces/quartz-web-service.interface";
import { QuartzWebServiceService } from './quartz-web-service.service';

export class QuartzWebServiceModule extends QuartzBaseModule {

    private _configuration: IWebServiceConfiguration;
    private _service: QuartzWebServiceService;

    private _server: http.Server;
    private _port: any;

    constructor() {
        super('webservice');
        debug('ts-express:server');
    }

    public initialize() {
        this._service = new QuartzWebServiceService();
        this._port = this._service.normalizePort(process.env.PORT || 8080);
        WebService.set('port', this._port);
        this._server = http.createServer(WebService);
    }

    public async execute() {
        this._server.listen(this._port);
        this._server.on('error', this.onError);
        this._server.on('listening', this.onListening);
    }

    public uninitialize() {
    }

    
    public onListening(): void {
        let addr = this._server.address();
        let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
        console.log(`Listening on ${bind}`);
    }
    
    public onError(error: NodeJS.ErrnoException): void {
        if (error.syscall !== 'listen') throw error;
        let bind = (typeof this._port === 'string') ? 'Pipe ' + this._port : 'Port ' + this._port;
        switch(error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
            break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
            break;
            default:
                throw error;
        }
    }
}
