import { IWebServiceController } from "../module-web-service/interfaces/quartz-web-service.interface";
import { QuartzBaseModule } from "./quartz-base.module";

export class QuartzBaseController implements IWebServiceController {

    protected _parent: QuartzBaseModule;

    constructor(parent: QuartzBaseModule) {
        this._parent = parent;
    }

    scrutanize(...args: any[]) {
        throw new Error("Method not implemented.");
    }

}