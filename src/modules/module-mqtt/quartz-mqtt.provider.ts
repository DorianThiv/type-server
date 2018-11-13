import * as Mqtt from 'mqtt';
import { QuartzMqttModule } from "./quartz-mqtt.module";
import { MqttClient } from "mqtt";
import { QuartzBaseProvider } from "../module-base/quartz-base.provider";
import { QuartzIOType } from '../../enums/quartz-io.enum';

export class QuartzMqttProvider extends QuartzBaseProvider {

    private _mqtt: MqttClient;

    constructor(module: QuartzMqttModule) {
        super(module);
    }

    public execute() {
        if (this._module && this._module.configuration) {
            const port = this._module.configuration.port ? this._module.configuration.port : 1883;
            this._mqtt = Mqtt.connect(`${this._module.configuration.protocol}://${this._module.configuration.broker}`, { port: port });
            this._mqtt.on('connect', () => { this.onConnection() });
            this._mqtt.on('message', (topic, message) => { this.onMessage(topic, message) });
            this._mqtt.on('packetsend', (packet: Mqtt.Packet) => { this.onPacket(packet) });
            this._mqtt.on('packetreceive', (packet: Mqtt.Packet) => { this.onPacket(packet) });
            this._mqtt.on('error', (error) => { this.onError(error) });
        }
    }

    private onConnection() {
        console.log('Quartz mqtt client connected to : ' + `${this._module.configuration.protocol}://${this._module.configuration.broker}:${this._module.configuration.port}`);
        if (this._module.configuration && this._module.configuration.topics) {
            const topics = this._module.configuration.topics;
            topics.forEach(topic => this._mqtt.subscribe(topic));
        }
    }

    private onMessage(topic: any, message: any) {
        // console.log('MQTT : on message');
        console.log(message.toString());
        this._module.subscriber.notify('webservice', QuartzIOType.Input, message);
        // (<QuartzMqttService>this._module.service).sendMessage(message);
    }

    private onPacket(packet: Mqtt.Packet) {
        // console.log(packet);
    }

    private onError(error: Error) {
        console.error(error);
    }

}