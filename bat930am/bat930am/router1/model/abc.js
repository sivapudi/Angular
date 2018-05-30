"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var router_1 = require("@angular/router");
var cls1 = /** @class */ (function () {
    function cls1() {
    }
    cls1 = __decorate([
        core_1.Component({ selector: "s1", templateUrl: "views/p1.html" })
    ], cls1);
    return cls1;
}());
var clshome = /** @class */ (function () {
    function clshome() {
    }
    clshome.prototype.fun1 = function () {
        alert("hi");
    };
    clshome = __decorate([
        core_1.Component({ templateUrl: "views/home.html" })
    ], clshome);
    return clshome;
}());
var clsabout = /** @class */ (function () {
    function clsabout() {
    }
    clsabout = __decorate([
        core_1.Component({ templateUrl: "views/about.html" })
    ], clsabout);
    return clsabout;
}());
var clscontact = /** @class */ (function () {
    function clscontact() {
    }
    clscontact = __decorate([
        core_1.Component({ templateUrl: "views/contact.html" })
    ], clscontact);
    return clscontact;
}());
var obj = [{
        path: "", component: clshome
    },
    {
        path: "home", component: clshome
    }, {
        path: "about", component: clsabout
    }, {
        path: "contact", component: clscontact
    }];
var routes = router_1.RouterModule.forRoot(obj);
var clsmod = /** @class */ (function () {
    function clsmod() {
    }
    clsmod = __decorate([
        core_1.NgModule({
            declarations: [cls1, clshome, clsabout, clscontact],
            imports: [platform_browser_1.BrowserModule, routes],
            bootstrap: [cls1]
        })
    ], clsmod);
    return clsmod;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmod);
