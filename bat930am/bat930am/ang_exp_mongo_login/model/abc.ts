import {Component,NgModule,Inject} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {FormsModule} from "@angular/forms"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {Http,HttpModule} from "@angular/http"
@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1{

constructor(@Inject(Http) public obj){
}
t1;t2;
funlogin(){
var obj={uname:this.t1,pwd:this.t2}
this.obj.post("sm1",obj).subscribe(this.cback1)
}
cback1=(dt)=>{
var res=JSON.parse(dt._body)
alert(dt._body)
if(res.length>0)
{
window.location="views/welcome.html"
}
else
alert("Invalid user")
}

}

@NgModule({
declarations:[cls1],
imports:[BrowserModule,HttpModule,FormsModule],
bootstrap:[cls1]
})
class clsmod{
}
platformBrowserDynamic().bootstrapModule(clsmod)

