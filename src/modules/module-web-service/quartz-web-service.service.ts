import { QuartzBaseService } from "../module-base/quartz-base.service";

export class QuartzWebServiceService extends QuartzBaseService {

    public normalizePort(val: number|string): number|string|boolean {
        let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
        if (isNaN(port)) return val;
        else if (port >= 0) return port;
        else return false;
    }

}
