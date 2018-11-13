import { QuartzBaseSubscriber } from "../module-base/quartz-base.subscriber";
import { QuartzWebServiceModule } from "./quartz-web-service.module";

export class QuartzWebServiceSubscriber extends QuartzBaseSubscriber {

    constructor(module: QuartzWebServiceModule) {
        super(module);
        this._modulesToSubscribe = ['mqtt'];
    }

}