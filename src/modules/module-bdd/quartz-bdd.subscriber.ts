import { QuartzBaseSubscriber } from "../module-base/quartz-base.subscriber";
import { QuartzBddModule } from "./quartz-bdd.module";

export class QuartzBddSubscriber extends QuartzBaseSubscriber {

    constructor(module: QuartzBddModule) {
        super(module);
    }

}