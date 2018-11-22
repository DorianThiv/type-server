import { QuartzDbModule } from "./quartz-db.module";
import { QuartzBaseController } from "../module-base/quartz-base.controller";

export class QuartzDbController extends QuartzBaseController {

    constructor(module: QuartzDbModule) {
        super(module);
    }

    public async scrutanize() {
        try {
            this._router.get('/db', (req, res, next) => {
                const params = this.parseParameters(req);
                const result = params;
                res.json(result);
            });
    
            this._router.post('/db', (req, res, next) => {
                const parsedUrl = this.parseUrl(req.url);
                const query = this.parseQuery(parsedUrl.query);
                res.json(req.url);
            });
    
            this._router.put('/db', (req, res, next) => {
                res.json({
                    'type': 'echo',
                    'method': 'PUT'
                });
            });
    
            this._router.delete('/db', (req, res, next) => {
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