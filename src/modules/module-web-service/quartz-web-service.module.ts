
import { QuartzBaseModule } from "../module-base/quartz-base.module";
import { QuartzWebServiceService } from './quartz-web-service.service';
import { QuartzWebServiceProvider } from './quartz-web-service.provider';
import { IWebServiceConfiguration } from "./interfaces/quartz-web-service.interface";
import { QuartzWebServiceSimpleProvider } from "./quartz-web-service-simple.provider";
import { QuartzWebServiceSocketProvider } from "./quartz-web-service-socket.provider";
import { WebServiceActionType } from "./enums/web-service-action.enum";
import { WebServiceConnectionType } from "./enums/web-service-connection.enum";
import { QuartzIOType } from "../../enums/quartz-io.enum";

export class QuartzWebServiceModule extends QuartzBaseModule {

    public configuration: IWebServiceConfiguration;
    public connectionType: WebServiceConnectionType;

    protected _service: QuartzWebServiceService;
    protected _provider: QuartzWebServiceProvider;


    constructor() {
        super('webservice');
    }

    public initialize() {
        this._service = new QuartzWebServiceService();
        switch (this.configuration.protocol) {
            case 'http':
                this._provider = new QuartzWebServiceSimpleProvider(this, 8080);
                this.connectionType = WebServiceConnectionType.Simple;
                break;
            case 'ws':
                this._provider = new QuartzWebServiceSocketProvider(this);
                this.connectionType = WebServiceConnectionType.Socket;
                break;
            default:
                console.error('Quartz web service : unsupported protocol : ' + this.configuration.protocol);
                break;
        }
    }

    public async execute() {
        if(this._subscriber) {
            this._subscriber.subscribeAll(QuartzIOType.Input, this.action);
        }
        if (this._provider) {
            this._provider.execute();
        }
    }

    public action(action: WebServiceActionType, data: any) {
        console.log(action);
        console.log(data);
        if (this._provider) {
            this._provider.action(action, data);
        }
    }

    public uninitialize() {
    }
}
