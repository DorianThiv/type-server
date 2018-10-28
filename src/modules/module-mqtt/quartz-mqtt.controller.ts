import { IWebServiceController } from "../module-web-service/interfaces/quartz-web-service.interface";
import { QuartzMqttModule } from "./quartz-mqtt.module";
import { QuartzBaseController } from "../module-base/quartz-base.controller";

export class QuartzMqttController extends QuartzBaseController {

    constructor(module: QuartzMqttModule) {
        super(module);
    }

    scrutanize(...args: any[]) {
        throw new Error("Method not implemented.");
    }

}