
import { IQuartzModule } from "./interfaces/quartz-module.interface";
import { QuartzMqttModule } from "./module-mqtt/quartz-mqtt.module";
import { QuartzWebServiceModule } from "./module-web-service/quartz-web-service.module";
import { QuartzBaseModule } from "./module-base/quartz-base.module";

export class QuartzModuleLoader  {

    private static _modules: { [reference: string]: QuartzBaseModule };
   
    public static initialize() {
        QuartzModuleLoader._modules = {};
        QuartzModuleLoader._modules['mqtt'] = new QuartzMqttModule();
        QuartzModuleLoader._modules['webservice'] = new QuartzWebServiceModule();
        Object.keys(QuartzModuleLoader._modules).forEach((ref: string) => QuartzModuleLoader._modules[ref].initialize());
    }
    
    public static execute() {
        Object.keys(QuartzModuleLoader._modules).forEach((ref: string) => QuartzModuleLoader._modules[ref].execute());
    }
    
    public static uninitialize() {
        Object.keys(QuartzModuleLoader._modules).forEach((ref: string) => QuartzModuleLoader._modules[ref].uninitialize());
    }
    
    public static getModule(reference: string) {
        return QuartzModuleLoader._modules[reference];
    }
    
    public static getModules() {
        return QuartzModuleLoader._modules;
    }
    
    public static getModuleSubscriber(reference: string) {
        return QuartzModuleLoader._modules[reference] ? QuartzModuleLoader._modules[reference].subscriber : null;
    }
}