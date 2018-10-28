import { QuartzBaseModule } from "../module-base/quartz-base.module";
import { IWebServiceConfiguration } from "./interfaces/quartz-web-service.interface";


export class QuartzWebServiceModule extends QuartzBaseModule {

    private _configuration: IWebServiceConfiguration;

    constructor() {
        super('webservice');
    }

    public initialize() {
    }

    public async execute() {
    }

    public uninitialize() {
    }

}
