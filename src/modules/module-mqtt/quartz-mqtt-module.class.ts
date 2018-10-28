import * as Mqtt from 'mqtt';
import { MqttClient } from "mqtt";
import { QuartzBaseModule } from "../module-base/quartz-base-module.class";
import { QuartzConfigService } from "../../services/quartz-config.class";
import { IMqttConfiguration } from './interfaces/quartz-mqtt.interface';

export class QuartzMqttModule extends QuartzBaseModule {

    private _mqtt: MqttClient;
    private _configuration: IMqttConfiguration;

    constructor() {
        super('mqtt');
    }

    public initialize() {
        const configService = new QuartzConfigService();
        this._configuration = configService.getConfigurationModuleByReference(this._reference);
        if (this._configuration) {
            this._mqtt = Mqtt.connect(this._configuration.protocol + this._configuration.broker);
            this._mqtt.on('connect', () => { this.onConnection() });
            this._mqtt.on('message', (topic, message) => { this.onMessage(topic, message) });
            this._mqtt.on('error', (error) => { this.onError(error) });
        }
        return true;
    }

    private onConnection() {
        if (this._configuration && this._configuration.topics) {
            const topics = this._configuration.topics;
            topics.forEach(topic => this._mqtt.subscribe(topic));
        }
    }

    private onMessage(topic: any, message: any) {
        console.log('MQTT : on message');
        console.log(topic);
        console.log(message);
    }

    private onError(error: Error) {
        console.log('MQTT : on error');
        console.log(error);
    }

}