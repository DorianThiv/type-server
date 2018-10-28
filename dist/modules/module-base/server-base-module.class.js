"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServerBaseModule = /** @class */ (function () {
    function ServerBaseModule(refernce) {
        this._reference = refernce;
        console.log('Instantiate module : ' + this._reference);
    }
    ServerBaseModule.prototype.initialize = function () {
        console.error('Method not implemented.');
        return true;
    };
    ServerBaseModule.prototype.execute = function () {
        console.error('Method not implemented.');
        return true;
    };
    ServerBaseModule.prototype.uninitialize = function () {
        console.error('Method not implemented.');
        return true;
    };
    return ServerBaseModule;
}());
exports.ServerBaseModule = ServerBaseModule;
//# sourceMappingURL=server-base-module.class.js.map