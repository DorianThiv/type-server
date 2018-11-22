
import * as Mysql from 'mysql';

import { QuartzDbModule } from "./quartz-db.module";
import { QuartzBaseProvider } from "../module-base/quartz-base.provider";
import { QuartzConfigService } from "../../services/quartz-config.service";
import { IDbConfiguration } from "./interfaces/quartz-db.interface";

export class QuartzDbProvider extends QuartzBaseProvider {

    private _session: Mysql.Connection;

    constructor(module: QuartzDbModule) {
        super(module);
    }

    public initialize() {
        const configuration: IDbConfiguration = QuartzConfigService.getInstance().getConfigurationModuleByReference('db');
        if (configuration) {
            const options = { host: configuration.host, user: configuration.user, password: configuration.password }; 
            this._session = Mysql.createConnection(options);
        }
    }

    public execute() {
        if (this._session) {
            this._session.connect((error) => this.onConnection(error));
        }
    }

    public onConnection(error: Mysql.MysqlError) {
        if (error) { throw error; }
        console.log('Mysql connection initialized.');
    }

}