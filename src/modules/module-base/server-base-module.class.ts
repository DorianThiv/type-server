
import { IServerModule } from "../interfaces/server-module.interface";

export class ServerBaseModule implements IServerModule {
    
    private _reference: string;

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