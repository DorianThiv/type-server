import { QuartzBddModule } from "./quartz-bdd.module";
import { QuartzBaseProvider } from "../module-base/quartz-base.provider";

export class QuartzBddProvider extends QuartzBaseProvider {

    constructor(module: QuartzBddModule) {
        super(module);
    }

}