
import { IQuartzModule } from "./interfaces/quartz-module.interface";
import { QuartzMqttModule } from "./module-mqtt/quartz-mqtt.module";
import { QuartzWebServiceModule } from "./module-web-service/quartz-web-service.module";
import { QuartzBaseModule } from "./module-base/quartz-base.module";

export class QuartzModuleLoader  {

    private static _modules: Map<string, QuartzBaseModule>;
    
    public static initialize() {
        QuartzModuleLoader._modules = new Map<string, QuartzBaseModule>();
        QuartzModuleLoader._modules['mqtt'] = new QuartzMqttModule();
        QuartzModuleLoader._modules['webservice'] = new QuartzWebServiceModule();
        QuartzModuleLoader._modules.forEach((module: QuartzBaseModule) => { module.initialize() });
    }
    
    public static execute() {
        QuartzModuleLoader._modules.forEach((module: QuartzBaseModule) => { module.execute() });
    }
    
    public static uninitialize() {
        QuartzModuleLoader._modules.forEach((module: QuartzBaseModule) => { module.uninitialize() });
    }

    public static getModule(reference: string) {
        return QuartzModuleLoader._modules.get(reference);
    }

    public static getModules() {
        return QuartzModuleLoader._modules;
    }

    public static getModuleSubscriber(reference: string) {
        return QuartzModuleLoader._modules.get(reference) ? QuartzModuleLoader._modules.get(reference).subscriber : null;
    }

}