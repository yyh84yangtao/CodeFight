"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by eason on 16-9-22.
 */
var stage_interface_1 = require("./stage.interface");
var index_1 = require("../ai/index");
var index_2 = require("../../define/index");
var index_3 = require("../map/index");
var GamingStage = (function (_super) {
    __extends(GamingStage, _super);
    function GamingStage() {
        _super.apply(this, arguments);
    }
    GamingStage.prototype.onCreate = function (eventService) {
        this.ais = [];
        this.map = new index_3.BaseMap(index_2.Config.WIDTH, index_2.Config.HEIGHT);
        this.stage.addChild(this.map.toModel());
    };
    GamingStage.prototype.onLooper = function () {
        for (var _i = 0, _a = this.ais; _i < _a.length; _i++) {
            var ai = _a[_i];
            ai.lifeCycle('LOOP');
        }
    };
    GamingStage.prototype.onSwitch = function (fn) {
        fn();
    };
    GamingStage.prototype.afterSwitch = function (msg) {
        var ai = new index_1.AI();
        //测试代码
        ai.lifeCycle('CREATE', "({onStart:function(){\n            console.log('on start');},\n            onLooper:function(){\n            this.ahead();\n            this.life=1000;\n            }})");
        this.stage.addChild(ai.toModel());
        this.ais.push(ai);
        ai.lifeCycle('START');
    };
    GamingStage.prototype.onDestory = function () {
    };
    return GamingStage;
}(stage_interface_1.Stage));
exports.GamingStage = GamingStage;
//# sourceMappingURL=stage.gaming.js.map