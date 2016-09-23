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
var ai_container_1 = require("../ai/ai.container");
var PrepareStage = (function (_super) {
    __extends(PrepareStage, _super);
    function PrepareStage() {
        _super.apply(this, arguments);
    }
    PrepareStage.prototype.onCreate = function () {
        var ai = new ai_container_1.AI();
        ai.call('/view/test', {});
        ai.call('/action/test', {});
        ai.call('/view/test', {});
    };
    PrepareStage.prototype.onSwitch = function (fn) {
        fn();
    };
    PrepareStage.prototype.afterSwitch = function () {
    };
    PrepareStage.prototype.onDestory = function () {
    };
    return PrepareStage;
}(stage_interface_1.Stage));
exports.PrepareStage = PrepareStage;
//# sourceMappingURL=stage.prepare.js.map