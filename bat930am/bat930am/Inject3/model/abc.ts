import {Inject,Injectable,Component,NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule} from "@angular/forms"

class abcd{
sno=100
}

@Injectable()
class clsinj{
clsobj=new abcd();
}

@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1{
t1;
constructor(@Inject(clsinj) private obj)
{
this.t1=obj.clsobj.sno
}
funmod(){
this.obj.clsobj.sno=this.t1;
}
}

@Component({selector:"s2",templateUrl:"views/t2.htm"})
class cls2{
t2;
constructor(@Inject (clsinj) public obj)
{
this.t2=obj.clsobj.sno;
}
funget(){
this.t2=this.obj.clsobj.sno
}
}

@NgModule({
declarations:[cls1,cls2],
imports:[BrowserModule,FormsModule],
bootstrap:[cls1,cls2],
providers:[clsinj]
})
class clsmod{
}
platformBrowserDynamic().bootstrapModule(clsmod)

