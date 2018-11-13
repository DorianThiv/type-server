import { QuartzModuleLoader } from "./modules/quartz.loader";

class Quartz {

    public static start() {
        console.log('Server quartz start');
        // NetworkHelper.ip();
        QuartzModuleLoader.initialize();
        QuartzModuleLoader.execute();
        return 0;
    }

}

Quartz.start();