import { QuartzModuleLoader } from "./modules/quartz.loader";

class Quartz {

    private static _loader: QuartzModuleLoader;

    public static start() {
        console.log('Server quartz start');
        Quartz._loader = QuartzModuleLoader.getInstance();
        Quartz._loader.initialize();
        Quartz._loader.execute();
        return 0;
    }

}

Quartz.start();