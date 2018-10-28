"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_mqtt_module_class_1 = require("./module-mqtt/server-mqtt-module.class");
var ServerModuleLoader = /** @class */ (function () {
    function ServerModuleLoader(context) {
        this._context = context;
        this._modules = {};
        this._modules['mqtt'] = new server_mqtt_module_class_1.ServerMqttModule();
    }
    ServerModuleLoader.prototype.initialize = function () {
        return true;
    };
    ServerModuleLoader.prototype.execute = function () {
        return true;
    };
    ServerModuleLoader.prototype.uninitialize = function () {
        return true;
    };
    return ServerModuleLoader;
}());
exports.ServerModuleLoader = ServerModuleLoader;
//# sourceMappingURL=server-loader.class.js.map