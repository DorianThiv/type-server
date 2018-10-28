import { QuartzModuleLoader } from "./modules/quartz-loader.class";
import { QuartzConfigService } from "./services/quartz-config.class";

class Quartz {

    private static _loader: QuartzModuleLoader;

    public static start() {
        console.log('Start quartz');
        const config = new QuartzConfigService();
        // Quartz._loader = new QuartzModuleLoader();
        return 0;
    }

}

Quartz.start();