"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var forms_1 = require("@angular/forms");
var clsinj = /** @class */ (function () {
    function clsinj() {
        this.sno = 100;
    }
    clsinj = __decorate([
        core_1.Injectable()
    ], clsinj);
    return clsinj;
}());
var cls1 = /** @class */ (function () {
    function cls1(obj) {
        this.obj = obj;
        this.t1 = obj.sno;
    }
    cls1.prototype.funmod = function () {
        this.obj.sno = this.t1;
    };
    cls1 = __decorate([
        core_1.Component({ selector: "s1", templateUrl: "views/p1.html" }),
        __param(0, core_1.Inject(clsinj))
    ], cls1);
    return cls1;
}());
var cls2 = /** @class */ (function () {
    function cls2(obj) {
        this.obj = obj;
        this.t2 = obj.sno;
    }
    cls2.prototype.funget = function () {
        this.t2 = this.obj.sno;
    };
    cls2 = __decorate([
        core_1.Component({ selector: "s2", templateUrl: "views/t2.htm" }),
        __param(0, core_1.Inject(clsinj))
    ], cls2);
    return cls2;
}());
var clsmod = /** @class */ (function () {
    function clsmod() {
    }
    clsmod = __decorate([
        core_1.NgModule({
            declarations: [cls1, cls2],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            bootstrap: [cls1, cls2],
            providers: [clsinj]
        })
    ], clsmod);
    return clsmod;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmod);
