
import { QuartzBaseModule } from "../module-base/quartz-base.module";

import { QuartzDbService } from './quartz-db.service';
import { QuartzDbController } from './quartz-db.controller';
import { QuartzDbProvider } from './quartz-db.provider';
import { QuartzDbSubscriber } from "./quartz-db.subscriber";
import { IDbConfiguration } from "./interfaces/quartz-db.interface";

export class QuartzDbModule extends QuartzBaseModule {

    public configuration: IDbConfiguration;

    protected _service: QuartzDbService;
    protected _controller: QuartzDbController;
    protected _provider: QuartzDbProvider;
    protected _subscriber: QuartzDbSubscriber;

    constructor() {
        super('db');
        this._controller = new QuartzDbController(this);
        this._provider = new QuartzDbProvider(this);
        this._service = new QuartzDbService();
        this._subscriber = new QuartzDbSubscriber(this);
    }

    public initialize() {
        if (this._provider) {
            this._provider.initialize();
        }
    }

    public async execute() {
        if (this._provider) {
            this._provider.execute();
        }
    }

}