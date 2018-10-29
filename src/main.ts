import { QuartzModuleLoader } from "./modules/quartz.loader";
import { NetworkHelper } from "./helpers/network.helper";

class Quartz {

    public static start() {
        console.log('Server quartz start');
        NetworkHelper.ip();
        // QuartzModuleLoader.initialize();
        // QuartzModuleLoader.execute();
        return 0;
    }

}

Quartz.start();