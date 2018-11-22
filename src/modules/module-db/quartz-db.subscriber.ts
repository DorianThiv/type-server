import { QuartzBaseSubscriber } from "../module-base/quartz-base.subscriber";
import { QuartzDbModule } from "./quartz-db.module";

export class QuartzDbSubscriber extends QuartzBaseSubscriber {

    constructor(module: QuartzDbModule) {
        super(module);
    }

}