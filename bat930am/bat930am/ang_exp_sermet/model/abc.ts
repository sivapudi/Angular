import {Component,NgModule,Inject} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {Http,HttpModule} from "@angular/http"
@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1{
str:any="scott"
constructor(@Inject(Http) public obj){
}

fun2(){
var ob={uname:"scott",city:"hyd"}
this.obj.post("/sm2",ob).subscribe(function(dt){
alert(dt._body)
})
}

fun1(){
this.str="abcd"
this.obj.get("sm1").subscribe(this.cback1,function(x){
alert("Err")
alert(x)
})
}
cback1=(dt)=>{
this.str=dt._body
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

