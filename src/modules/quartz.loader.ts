
import { IQuartzModule } from "./interfaces/quartz-module.interface";
import { QuartzMqttModule } from "./module-mqtt/quartz-mqtt.module";
import { QuartzWebServiceModule } from "./module-web-service/quartz-web-service.module";

export class QuartzModuleLoader implements IQuartzModule {

    private static _instance: QuartzModuleLoader;

    private _modules: { [reference: string]: IQuartzModule };

    private constructor() { }

    public static getInstance() {
        if (QuartzModuleLoader._instance) {
            return QuartzModuleLoader._instance;
        }
        return new QuartzModuleLoader();
    }
    
    public initialize() {
        this._modules = {};
        this._modules['mqtt'] = new QuartzMqttModule();
        this._modules['webservice'] = new QuartzWebServiceModule();
        Object.keys(this._modules).forEach((ref: string) => this._modules[ref].initialize());
    }
    
    public execute() {
        Object.keys(this._modules).forEach((ref: string) => this._modules[ref].execute());
    }
    
    public uninitialize() {
        Object.keys(this._modules).forEach((ref: string) => this._modules[ref].uninitialize());
    }

    public static getModule(reference: string) {
        return this._instance._modules[reference];
    }

}