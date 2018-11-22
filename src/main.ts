import { QuartzModuleLoader } from "./modules/quartz.loader";

class Quartz {

    public static async start() {
        Quartz.handlers();
        console.log('Server quartz start');
        QuartzModuleLoader.initialize();
        QuartzModuleLoader.execute();
        return 0;
    }
    
    private static handlers() {
        process.on('SIGINT', () => this.onSigint());
    }

    private static onSigint() {
        console.log("Interrupt Quartz Server");
        process.exit();
    }

}

Quartz.start();