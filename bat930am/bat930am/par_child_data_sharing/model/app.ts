import {Component, NgModule,Input} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1{
    sno:number=100
    uname:string="scott"
}

@Component({selector:"s2",templateUrl:"views/p2.html"})
class cls2{
    @Input() sn;
    @Input() un;
}

@NgModule({
    declarations:[cls1,cls2],
    imports:[BrowserModule],
    bootstrap:[cls1]
})
class clsmod{}
platformBrowserDynamic().bootstrapModule(clsmod)



