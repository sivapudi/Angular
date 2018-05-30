"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var clspipe1 = /** @class */ (function () {
    function clspipe1() {
    }
    clspipe1.prototype.transform = function (x) {
        return x.toUpperCase();
    };
    clspipe1 = __decorate([
        core_1.Pipe({ name: "p1" })
    ], clspipe1);
    return clspipe1;
}());
var clspipe2 = /** @class */ (function () {
    function clspipe2() {
    }
    clspipe2.prototype.transform = function (rv) {
        var str = rv[0] + rv[1] + "X-XXXX-X" + rv[8] + rv[9];
        return str;
    };
    clspipe2 = __decorate([
        core_1.Pipe({ name: "p2" })
    ], clspipe2);
    return clspipe2;
}());
var clspipe3 = /** @class */ (function () {
    function clspipe3() {
    }
    clspipe3.prototype.transform = function (rv) {
        // return rv.replace(/in/g,"abcd")
        return rv.split("in").join("xyzzz");
    };
    clspipe3 = __decorate([
        core_1.Pipe({ name: "p3" })
    ], clspipe3);
    return clspipe3;
}());
var clspipe5 = /** @class */ (function () {
    function clspipe5() {
    }
    clspipe5.prototype.transform = function (rv) {
        var str = "";
        for (var i = rv.length - 1; i >= 0; i--) {
            str += rv[i];
        }
        return str;
    };
    clspipe5 = __decorate([
        core_1.Pipe({ name: "p5" })
    ], clspipe5);
    return clspipe5;
}());
var clspipe6 = /** @class */ (function () {
    function clspipe6() {
    }
    clspipe6.prototype.transform = function (rv) {
        var str = "";
        for (var i = 0; i < rv.length; i++) {
            if (i % 2 == 0)
                str += rv[i].toUpperCase();
            else
                str += rv[i];
        }
        return str;
    };
    clspipe6 = __decorate([
        core_1.Pipe({ name: "p6" })
    ], clspipe6);
    return clspipe6;
}());
var clspipe7 = /** @class */ (function () {
    function clspipe7() {
    }
    clspipe7.prototype.transform = function (rv) {
        var arr = ["i", "ii", "iii", "iv", "v"];
        var arr1 = [1, 2, 3, 4, 5];
        for (i = 0; i < arr1.length; i++) {
            if (rv == arr1[i])
                return arr[i];
        }
    };
    clspipe7 = __decorate([
        core_1.Pipe({ name: "p7" })
    ], clspipe7);
    return clspipe7;
}());
var clspipe4 = /** @class */ (function () {
    function clspipe4() {
    }
    clspipe4.prototype.transform = function (rv) {
        var arr = rv.split("in");
        var str = "";
        for (var i = 0; i < arr.length - 1; i++) {
            if (i != 1)
                str += arr[i] + "in";
            else
                str += arr[i] + "iinnn";
        }
        return str;
    };
    clspipe4 = __decorate([
        core_1.Pipe({ name: "p4" })
    ], clspipe4);
    return clspipe4;
}());
var cls1 = /** @class */ (function () {
    function cls1() {
        this.uname = "alex";
    }
    cls1 = __decorate([
        core_1.Component({ selector: "s1", templateUrl: "views/pro1.html" })
    ], cls1);
    return cls1;
}());
var cls2 = /** @class */ (function () {
    function cls2() {
    }
    cls2 = __decorate([
        core_1.Component({ selector: "sel1" })
    ], cls2);
    return cls2;
}());
var clsmod = /** @class */ (function () {
    function clsmod() {
    }
    clsmod = __decorate([
        core_2.NgModule({
            declarations: [cls1, clspipe1, clspipe7, clspipe6, clspipe5, clspipe4, clspipe2, clspipe3],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [cls1]
        })
    ], clsmod);
    return clsmod;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmod);
