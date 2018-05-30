import {Component,NgModule,Inject} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {RouterModule,Router} from "@angular/router"

@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1{
}

@Component({templateUrl:"views/home.html"})
class clshome{
constructor(@Inject (Router) public rout ){
}
fun1(){
  this.rout.navigateByUrl("about")
}
}

@Component({templateUrl:"views/about.html"})
class clsabout{
}
@Component({templateUrl:"views/contact.html"})
class clscontact{
}
var obj=[{
path:"",component:clshome
},
{
path:"home",component:clshome
},{
path:"about",component:clsabout
},{
path:"contact",component:clscontact
}]
var routes=RouterModule.forRoot(obj)

@NgModule({
declarations:[cls1,clshome,clsabout,clscontact],
imports:[BrowserModule,routes],
bootstrap:[cls1]
})
class clsmod{
}
platformBrowserDynamic().bootstrapModule(clsmod)

