"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_loader_class_1 = require("./modules/server-loader.class");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.start = function () {
        console.log('Start server');
        Server._loader = new server_loader_class_1.ServerModuleLoader(1);
        return 0;
    };
    return Server;
}());
Server.start();
//# sourceMappingURL=main.js.map