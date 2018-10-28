
import { IQuartzModule } from "./interfaces/quartz-module.interface";
import { QuartzMqttModule } from "./module-mqtt/quartz-mqtt-module.class";

export class QuartzModuleLoader implements IQuartzModule {

    private _context: Object;
    private _modules: { [reference: string]: IQuartzModule };

    constructor(context?: Object) {
        this._context = context;
        this._modules = {};
        this._modules['mqtt'] = new QuartzMqttModule();
    }
    
    public initialize() {
        return true;
    }
    
    public execute() {
        return true;
    }
    
    public uninitialize() {
        return true;
    }

}