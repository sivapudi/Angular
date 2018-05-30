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
var forms_1 = require("@angular/forms");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var cls1 = /** @class */ (function () {
    function cls1(obj) {
        this.obj = obj;
        this.cback1 = function (dt) {
            var res = JSON.parse(dt._body);
            alert(dt._body);
            if (res.length > 0) {
                window.location = "views/welcome.html";
            }
            else
                alert("Invalid user");
        };
    }
    cls1.prototype.funlogin = function () {
        var obj = { uname: this.t1, pwd: this.t2 };
        this.obj.post("sm1", obj).subscribe(this.cback1);
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
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule],
            bootstrap: [cls1]
        })
    ], clsmod);
    return clsmod;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmod);
