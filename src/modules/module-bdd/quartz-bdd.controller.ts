import { QuartzBddModule } from "./quartz-bdd.module";
import { QuartzBaseController } from "../module-base/quartz-base.controller";

export class QuartzBddController extends QuartzBaseController {

    constructor(module: QuartzBddModule) {
        super(module);
    }

    public async scrutanize() {
        try {
            this._router.get('/bdd', (req, res, next) => {
                const params = this.parseParameters(req);
                const result = params;
                res.json(result);
            });
    
            this._router.post('/bdd', (req, res, next) => {
                const parsedUrl = this.parseUrl(req.url);
                const query = this.parseQuery(parsedUrl.query);
                res.json(req.url);
            });
    
            this._router.put('/bdd', (req, res, next) => {
                res.json({
                    'type': 'echo',
                    'method': 'PUT'
                });
            });
    
            this._router.delete('/bdd', (req, res, next) => {
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