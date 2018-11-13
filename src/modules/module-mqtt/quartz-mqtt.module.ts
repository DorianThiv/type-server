
import { QuartzBaseModule } from "../module-base/quartz-base.module";
import { QuartzConfigService } from "../../services/quartz-config.service";
import { IMqttConfiguration } from './interfaces/quartz-mqtt.interface';
import { QuartzMqttService } from './quartz-mqtt.service';
import { QuartzMqttController } from './quartz-mqtt.controller';
import { QuartzMqttProvider } from './quartz-mqtt.provider';
import { QuartzMqttSubscriber } from "./quartz-mqtt.subscriber";

export class QuartzMqttModule extends QuartzBaseModule {

    public configuration: IMqttConfiguration;

    protected _service: QuartzMqttService;
    protected _controller: QuartzMqttController;
    protected _provider: QuartzMqttProvider;
    protected _subscriber: QuartzMqttSubscriber;

    constructor() {
        super('mqtt');
    }

    public initialize() {
        this._controller = new QuartzMqttController(this);
        this._provider = new QuartzMqttProvider(this);
        this._service = new QuartzMqttService();
        this._subscriber = new QuartzMqttSubscriber(this);
    }

    public async execute() {
        if (this._provider) {
            this._provider.execute();
        }
    }

}