
import { QuartzBaseModule } from "../module-base/quartz-base.module";

import { QuartzBddService } from './quartz-bdd.service';
import { QuartzBddController } from './quartz-bdd.controller';
import { QuartzBddProvider } from './quartz-bdd.provider';
import { QuartzBddSubscriber } from "./quartz-bdd.subscriber";
import { IBddConfiguration } from "./interfaces/quartz-bdd.interface";

export class QuartzBddModule extends QuartzBaseModule {

    public configuration: IBddConfiguration;

    protected _service: QuartzBddService;
    protected _controller: QuartzBddController;
    protected _provider: QuartzBddProvider;
    protected _subscriber: QuartzBddSubscriber;

    constructor() {
        super('bdd');
    }

    public initialize() {
        this._controller = new QuartzBddController(this);
        this._provider = new QuartzBddProvider(this);
        this._service = new QuartzBddService();
        this._subscriber = new QuartzBddSubscriber(this);
    }

    public async execute() {
        if (this._provider) {
            this._provider.execute();
        }
    }

}