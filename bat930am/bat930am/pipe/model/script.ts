import {Component} from "@angular/core"
import {NgModule}  from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"


@Component({selector:"s1",templateUrl:"views/pro1.html"})
class cls1
{
amount:number=500
uname:string="scott"
dt=new Date()
x:number=10000;
obj={uname:"scott",city:"hyd"}
}
@Component({selector:"sel1"})
class cls2{}

@NgModule({
declarations:[cls1],
	imports:[BrowserModule],
	bootstrap:[cls1]
})
class clsmod
{
}

platformBrowserDynamic().bootstrapModule(clsmod)