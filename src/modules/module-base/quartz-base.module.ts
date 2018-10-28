
import { IQuartzModule } from "../interfaces/quartz-module.interface";

export class QuartzBaseModule implements IQuartzModule {
    
    protected _reference: string;
    protected _loaded = false;

    constructor(refernce: string) {
        this._reference = refernce;
        console.log('Instantiate module : ' + this._reference);
    }

    public initialize() {
        console.error('Method not implemented.');
        
    }

    public async execute() {
        console.error('Method not implemented.');
        
    }

    public uninitialize() {
        console.error('Method not implemented.');
        
    }

}