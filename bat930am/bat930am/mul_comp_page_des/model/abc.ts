import {Component,NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Component({selector:"main",templateUrl:"views/main.html"})
class clsmain{}
@Component ({selector:"header",templateUrl:"views/header.html"})
class clsheader{}
@Component({selector:"content",templateUrl:"views/content.html"})
class clscontent{}
@Component({selector:"left",templateUrl:"views/left.html"})
class clsleft{}
@Component({selector:"right",templateUrl:"views/right.html"})
class clsright{}
@Component({selector:"footer",templateUrl:"views/footer.html"})
class clsfooter{}

@NgModule({
declarations:[clsmain,clscontent,clsfooter,clsheader,clsleft,clsright],
imports:[BrowserModule],
bootstrap:[clsmain]
})
class clsmod{
}
platformBrowserDynamic().bootstrapModule(clsmod)

