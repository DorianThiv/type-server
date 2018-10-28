import * as http from 'http';

import WebService from './models/WebService.class';
import { QuartzBaseModule } from "../module-base/quartz-base.module";
import { IWebServiceConfiguration } from "./interfaces/quartz-web-service.interface";
import { QuartzWebServiceService } from './quartz-web-service.service';
import { QuartzConfigService } from '../../services/quartz-config.service';

export class QuartzWebServiceModule extends QuartzBaseModule {

    private _configuration: IWebServiceConfiguration;
    private _service: QuartzWebServiceService;

    private _server: http.Server;
    private _port: any;

    constructor() {
        super('webservice');
    }

    public initialize() {
        this._configuration = QuartzConfigService.getInstance().getConfigurationModuleByReference(this._reference);
        this._service = new QuartzWebServiceService();
    }

    public async execute() {
        this._port = this._service.normalizePort(process.env.PORT || 8080);
        WebService.set('port', this._port);
        this._server = http.createServer(WebService);
        this._server.listen(this._port);
        this._server.on('error', (event) => this.onError(event));
        this._server.on('listening', () => this.onListening());
    }

    public uninitialize() {
    }

    private onListening(): void {
        let addr = this._server.address();
        let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
        console.log(`Quartz web service listening on ${bind}`);
    }
    
    private onError(error: NodeJS.ErrnoException): void {
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
