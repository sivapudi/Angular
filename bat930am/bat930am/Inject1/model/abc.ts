import {Component,NgModule,Injectable,Inject} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Injectable()
class clsinj{
sno:number=100;
}

@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1{
t1;
constructor(@Inject(clsinj) obj){
this.t1=obj.sno;
}
}


@NgModule({
declarations:[cls1],
imports:[BrowserModule],
bootstrap:[cls1],
providers:[clsinj]
})
class clsmod{
}
platformBrowserDynamic().bootstrapModule(clsmod)

