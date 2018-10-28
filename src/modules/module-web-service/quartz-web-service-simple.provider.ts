import * as http from 'http';
import { QuartzWebServiceModule } from "./quartz-web-service.module";
import { QuartzWebServiceProvider } from "./quartz-web-service.provider";
import { QuartzWebServiceService } from "./quartz-web-service.service";
import { WebService } from "./models/WebService.class";


export class QuartzWebServiceSimpleProvider extends QuartzWebServiceProvider {

    constructor(module: QuartzWebServiceModule, port?: number) {
        super(module);
        this._port = port ? port : 8080;
    }

    public execute() {
        const webService = new WebService().express;
        this._port = (<QuartzWebServiceService>this._module.service).normalizePort(process.env.PORT || this._port);
        webService.set('port', this._port);
        this._server = http.createServer(webService);
        this._server.listen(this._port);
        this._server.on('error', (error) => this.onError(error));
        this._server.on('listening', () => this.onListening());
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