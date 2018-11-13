import { QuartzBaseSubscriber } from "../module-base/quartz-base.subscriber";
import { QuartzMqttModule } from "./quartz-mqtt.module";

export class QuartzMqttSubscriber extends QuartzBaseSubscriber {

    constructor(module: QuartzMqttModule) {
        super(module);
    }

}