import {Component,NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1{
    fun1(){
        alert("Hi")
    }
}

@NgModule({
declarations:[cls1],
imports:[BrowserModule],
bootstrap:[cls1]
})
class clsmod{
}
platformBrowserDynamic().bootstrapModule(clsmod)

