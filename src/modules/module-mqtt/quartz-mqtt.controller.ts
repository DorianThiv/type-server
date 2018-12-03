import { QuartzMqttModule } from "./quartz-mqtt.module";
import { QuartzBaseController } from "../module-base/quartz-base.controller";

export class QuartzMqttController extends QuartzBaseController {

    constructor(module: QuartzMqttModule) {
        super(module);
    }

    public async scrutanize() {
        try {
            this._router.get('/mqtt', (req, res, next) => {
                const params = this.parseParameters(req);
                const result = params;
                res.json(result);
            });
    
            this._router.post('/mqtt', (req, res, next) => {
                const parsedUrl = this.parseUrl(req.url);
                console.log(parsedUrl);
                const query = this.parseQuery(parsedUrl.query);
                console.log(query);
                res.json(req.url);
            });
    
            this._router.put('/mqtt', (req, res, next) => {
                res.json({
                    'type': 'echo',
                    'method': 'PUT'
                });
            });
    
            this._router.delete('/mqtt', (req, res, next) => {
                res.json({
                    'type': 'echo',
                    'method': 'DELETE'
                });
            });
        } catch (error) {
            console.error('Quartz mqtt controller [error] [scrutanize()] : ' + error)
        }

    }

}