
import { Router } from 'express';
import { IWebServiceController } from "../interfaces/quartz-web-service.interface";
import { QuartzModuleLoader } from '../../quartz.loader';


export class WebServiceScrutanizer implements IWebServiceController {

    public router: Router;

    private _controllers: IWebServiceController[];

    constructor(router: Router) {
        this.router = router;
        const modules = QuartzModuleLoader.getModules();
        if (modules) {
            console.log(modules);
            const modulesWhichHaveController = Object.keys(modules).filter((ref: string) => modules[ref].hasController());
            console.log(modulesWhichHaveController);
            // this._controllers = modulesWhichHaveController.map(m => m)
        }
    }

    public scrutanize() {
        // this.controllers.map(c => c.scrutanize());
        console.log("Scrut...");
    }

}