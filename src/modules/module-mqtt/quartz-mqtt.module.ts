import * as Mqtt from 'mqtt';
import { MqttClient } from "mqtt";
import { QuartzBaseModule } from "../module-base/quartz-base.module";
import { QuartzConfigService } from "../../services/quartz-config.service";
import { IMqttConfiguration } from './interfaces/quartz-mqtt.interface';

export class QuartzMqttModule extends QuartzBaseModule {

    private _mqtt: MqttClient;
    private _configuration: IMqttConfiguration;

    constructor() {
        super('mqtt');
    }

    public initialize() {
        const configService = QuartzConfigService.getInstance();
        this._configuration = configService.getConfigurationModuleByReference(this._reference);
    }

    public async execute() {
        if (this._configuration) {
            this._mqtt = Mqtt.connect(this._configuration.protocol + this._configuration.broker);
            this._mqtt.on('connect', () => { this.onConnection() });
            this._mqtt.on('message', (topic, message) => { this.onMessage(topic, message) });
            this._mqtt.on('error', (error) => { this.onError(error) });
            this._loaded = true;
        }
    }

    private onConnection() {
        console.log('MQTT : on connection');
        console.log('is connected to : ' + this._configuration.protocol + this._configuration.broker);
        if (this._configuration && this._configuration.topics) {
            const topics = this._configuration.topics;
            topics.forEach(topic => this._mqtt.subscribe(topic));
        }
    }

    private onMessage(topic: any, message: any) {
        console.log('MQTT : on message');
        console.log(message.toString());
    }

    private onError(error: Error) {
        console.log('MQTT : on error');
        console.log(error);
    }

}