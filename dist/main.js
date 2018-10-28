"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quartz_loader_1 = require("./modules/quartz.loader");
var Quartz = /** @class */ (function () {
    function Quartz() {
    }
    Quartz.start = function () {
        console.log('Start quartz');
        Quartz._loader = new quartz_loader_1.QuartzModuleLoader();
        Quartz._loader.initialize();
        return 0;
    };
    return Quartz;
}());
Quartz.start();
//# sourceMappingURL=main.js.map