import { ServerModuleLoader } from "./modules/server-loader.class";

class Server {

    private static _loader: ServerModuleLoader;

    public static start() {
        console.log('Start server');
        Server._loader = new ServerModuleLoader(1);
        return 0;
    }

}

Server.start();