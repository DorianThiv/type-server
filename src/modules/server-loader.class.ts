
import { IServerModule } from "./interfaces/server-module.interface";
import { ServerMqttModule } from "./module-mqtt/server-mqtt-module.class";

export class ServerModuleLoader implements IServerModule {

    private _context: Object;
    private _modules: { [reference: string]: IServerModule };

    constructor(context: Object) {
        this._context = context;
        this._modules = {};
        this._modules['mqtt'] = new ServerMqttModule();
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