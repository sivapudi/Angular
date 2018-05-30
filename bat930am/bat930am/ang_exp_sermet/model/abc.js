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
var http_1 = require("@angular/http");
var cls1 = /** @class */ (function () {
    function cls1(obj) {
        var _this = this;
        this.obj = obj;
        this.str = "scott";
        this.cback1 = function (dt) {
            _this.str = dt._body;
        };
    }
    cls1.prototype.fun2 = function () {
        var ob = { uname: "scott", city: "hyd" };
        this.obj.post("/sm2", ob).subscribe(function (dt) {
            alert(dt._body);
        });
    };
    cls1.prototype.fun1 = function () {
        this.str = "abcd";
        this.obj.get("sm1").subscribe(this.cback1, function (x) {
            alert("Err");
            alert(x);
        });
    };
    cls1 = __decorate([
        core_1.Component({ selector: "s1", templateUrl: "views/p1.html" }),
        __param(0, core_1.Inject(http_1.Http))
    ], cls1);
    return cls1;
}());
var clsmod = /** @class */ (function () {
    function clsmod() {
    }
    clsmod = __decorate([
        core_1.NgModule({
            declarations: [cls1],
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            bootstrap: [cls1]
        })
    ], clsmod);
    return clsmod;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmod);
