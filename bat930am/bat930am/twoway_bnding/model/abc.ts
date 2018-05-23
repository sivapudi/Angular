import {Component,NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule} from "@angular/forms"
@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1{
    sno:number=100
}

@NgModule({
declarations:[cls1],
imports:[BrowserModule,FormsModule],
bootstrap:[cls1]
})
class clsmod{
}
platformBrowserDynamic().bootstrapModule(clsmod)

