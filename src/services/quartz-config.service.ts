
import configuration from '../assets/quartz.config.json';
import { Injectable } from './quartz-injector.service.js';

@Injectable
export class QuartzConfigService {

    private static _instance: QuartzConfigService;

    private constructor() { }

    public static getInstance() {
        if (QuartzConfigService._instance) {
            return QuartzConfigService._instance;
        }
        return new QuartzConfigService();
    }

    public getConfigurationModuleByReference(reference: string) {
        let module;
        if (configuration && configuration.modules) {
            module = configuration.modules.filter(m => m.name === reference);
            if (module && module.length === 1) {
                return module[0];
            } else {
                console.error(`Cannot find module configuration : {${reference}}`);
            }
        }
    }

}