import {Component, NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1{
    fun1(){
        alert("From class1")
    }
}

@Component({selector:"s2",templateUrl:"views/p2.html"})
class cls2 extends cls1{

}

@NgModule({
    declarations:[cls1,cls2],
    imports:[BrowserModule],
    bootstrap:[cls1,cls2]
})
class clsmod{}
platformBrowserDynamic().bootstrapModule(clsmod)



