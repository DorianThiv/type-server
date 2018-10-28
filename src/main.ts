import { QuartzModuleLoader } from "./modules/quartz.loader";

class Quartz {

    private static _loader: QuartzModuleLoader;

    public static start() {
        console.log('Start quartz');
        Quartz._loader = new QuartzModuleLoader();
        Quartz._loader.initialize();
        return 0;
    }

}

Quartz.start();