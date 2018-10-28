import { IQuartzModule } from "../interfaces/quartz-module.interface";
import { QuartzBaseModule } from "./quartz-base.module";

export class QuartzBaseProvider implements IQuartzModule {

    protected _module: QuartzBaseModule;

    constructor(module: QuartzBaseModule) {
        this._module = module;
    }

    public initialize() {
        console.error('Method not implemented.');
    }

    public execute() {
        console.error('Method not implemented.');
    }

    public action(...args: any[]) {
        console.error('Method not implemented.');
    }

    public uninitialize() {
        console.error('Method not implemented.');
    }


}