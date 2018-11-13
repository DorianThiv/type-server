
import { IQuartzModule } from "../interfaces/quartz-module.interface";
import { QuartzBaseService } from "./quartz-base.service";
import { QuartzBaseController } from "./quartz-base.controller";
import { QuartzBaseProvider } from "./quartz-base.provider";
import { QuartzConfigService } from "../../services/quartz-config.service";
import { QuartzBaseSubscriber } from "./quartz-base.subscriber";

export class QuartzBaseModule implements IQuartzModule {
    
    public reference: string;
    protected _loaded = false;
    
    protected _service: QuartzBaseService;
    protected _controller: QuartzBaseController;
    protected _provider: QuartzBaseProvider;
    protected _subscriber: QuartzBaseSubscriber;
    
    public configuration: any;

    public hasService() { return this._service ? true : false; }
    public hasController() { return this._controller ? true : false; }
    public hasProvider() { return this._service ? true : false; }

    public get service() { return this._service; }
    public get controller() { return this._controller; }
    public get provider() { return this._service; }
    public get subscriber() { return this._subscriber; }

    constructor(reference: string) {
        this.reference = reference;
        this.configuration = QuartzConfigService.getInstance().getConfigurationModuleByReference(this.reference);
        console.log('Instantiate module : ' + this.reference);
    }

    public initialize() {
        console.error('Method not implemented.');
    }

    public async execute() {
        console.error('Method not implemented.');
    }

    public action(...args: any[]) {
        console.error('Method not implemented.');
    }

    public uninitialize() {
        console.error('Method not implemented.');
    }

}