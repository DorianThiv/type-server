import { QuartzModuleLoader } from "./modules/quartz.loader";
import { NetworkHelper } from "./helpers/network.helper";
import { QuartzFileReaderService } from "./services/quartz-file-reader.service";

class Quartz {

    public static start() {
        console.log('Server quartz start');
        // NetworkHelper.ip();
        new QuartzFileReaderService().readSync('assets\\quartz.config.json');
        // QuartzModuleLoader.initialize();
        // QuartzModuleLoader.execute();
        return 0;
    }

}

Quartz.start();