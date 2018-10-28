
import { Router } from 'express';
import { IWebServiceController } from "../interfaces/quartz-web-service.interface";
import { QuartzModuleLoader } from '../../quartz.loader';


export class WebServiceScrutanizer {

    public router: Router;

    private _controllers: IWebServiceController[];

    constructor(router: Router) {
        this.router = router;
        const modules = QuartzModuleLoader.getModules();
        if (modules) {
            const refs = Object.keys(modules).filter((ref: string) => modules[ref].hasController());
            this._controllers = refs.map(r => modules[r].controller);
        }
        this._controllers.forEach(c => c.setRouter(this.router));
    }

    public scrutanize() {
        try {
            this._controllers.forEach(c => c.scrutanize());
        } catch (error) {
            console.error('Quartz web service [error] [scrutanize()] : ' + error);
        }
    }

}