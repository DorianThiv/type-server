
import { IQuartzModule } from "../interfaces/quartz-module.interface";

export class QuartzBaseModule implements IQuartzModule {
    
    protected _reference: string;

    constructor(refernce: string) {
        this._reference = refernce;
        console.log('Instantiate module : ' + this._reference);
        
    }

    public initialize() {
        console.error('Method not implemented.');
        return true;
    }

    public execute() {
        console.error('Method not implemented.');
        return true;
    }

    public uninitialize() {
        console.error('Method not implemented.');
        return true;
    }

}