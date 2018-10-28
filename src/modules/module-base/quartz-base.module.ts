
import { IQuartzModule } from "../interfaces/quartz-module.interface";
import { QuartzBaseService } from "./quartz-mqtt.service";
import { QuartzBaseController } from "./quartz-base.controller";
import { QuartzBaseProvider } from "./quartz-base.provider";
import { QuartzConfigService } from "../../services/quartz-config.service";

export class QuartzBaseModule implements IQuartzModule {
    
    protected _reference: string;
    protected _loaded = false;
    
    protected _service: QuartzBaseService;
    protected _controller: QuartzBaseController;
    protected _provider: QuartzBaseProvider;
    
    public configuration: any;

    public hasService() { return this._service ? true : false; }
    public hasController() { return this._controller ? true : false; }
    public hasProvider() { return this._service ? true : false; }

    public get service() { return this._service; }
    public get controller() { return this._controller; }
    public get provider() { return this._service; }

    constructor(refernce: string) {
        this._reference = refernce;
        this.configuration = QuartzConfigService.getInstance().getConfigurationModuleByReference(this._reference);
        console.log('Instantiate module : ' + this._reference);
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