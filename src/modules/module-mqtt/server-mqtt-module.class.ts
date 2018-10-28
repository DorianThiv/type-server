import { ServerBaseModule } from "../module-base/server-base-module.class";

export class ServerMqttModule extends ServerBaseModule {

    constructor() {
        super('mqtt');
    }

    public initialize() {
        return true;
    }

}