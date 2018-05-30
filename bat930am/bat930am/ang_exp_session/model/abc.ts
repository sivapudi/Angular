import {Component,NgModule,Inject} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {Http,HttpModule} from "@angular/http"
@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1{
constructor(@Inject(Http) public obj){
}


fun1(){
this.obj.get("sm1").subscribe(this.cback1,function(x){
alert("Err")
alert(x)
})
}
cback1=(dt)=>{
alert(dt._body)
}

}

@NgModule({
declarations:[cls1],
imports:[BrowserModule,HttpModule],
bootstrap:[cls1]
})
class clsmod{
}
platformBrowserDynamic().bootstrapModule(clsmod)

