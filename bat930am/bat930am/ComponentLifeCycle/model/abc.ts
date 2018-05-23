import {Component,NgModule,OnInit, DoCheck} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule} from "@angular/forms"

@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1 implements OnInit,DoCheck{
    sno:number=100
    ngOnInit(){
        console.log("Comp Init...")
    }
    ngDoCheck(){
     console.log("Variables Updating..")
    }
    ngAfterViewChecked(){
        console.log("View updated..")
    }
    ngOnDestroy(){
        console.log("Compo Destroyed...")
    }
}

@NgModule({
declarations:[cls1],
imports:[BrowserModule,FormsModule],
bootstrap:[cls1]
})
class clsmod{
}
platformBrowserDynamic().bootstrapModule(clsmod)

