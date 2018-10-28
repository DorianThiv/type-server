
import configuration from '../assets/quartz.config.json';

export class QuartzConfigService {

    constructor() { }

    public getConfigurationModuleByReference(reference: string) {
        let module;
        if (configuration && configuration.modules) {
            module = configuration.modules.filter(m => m.name === reference);
            return module;
        }
    }

}