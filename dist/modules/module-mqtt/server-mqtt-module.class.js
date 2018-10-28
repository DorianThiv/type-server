"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var server_base_module_class_1 = require("../module-base/server-base-module.class");
var ServerMqttModule = /** @class */ (function (_super) {
    __extends(ServerMqttModule, _super);
    function ServerMqttModule() {
        return _super.call(this, 'mqtt') || this;
    }
    ServerMqttModule.prototype.initialize = function () {
        console.log('Module mqtt initialized');
        return true;
    };
    return ServerMqttModule;
}(server_base_module_class_1.ServerBaseModule));
exports.ServerMqttModule = ServerMqttModule;
//# sourceMappingURL=server-mqtt-module.class.js.map