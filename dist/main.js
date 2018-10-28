"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quartz_config_class_1 = require("./services/quartz-config.class");
var Quartz = /** @class */ (function () {
    function Quartz() {
    }
    Quartz.start = function () {
        console.log('Start quartz');
        var config = new quartz_config_class_1.QuartzConfigService();
        // Quartz._loader = new QuartzModuleLoader();
        return 0;
    };
    return Quartz;
}());
Quartz.start();
//# sourceMappingURL=main.js.map