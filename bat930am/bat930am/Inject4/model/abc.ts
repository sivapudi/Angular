import {Inject,Injectable,Component,NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule} from "@angular/forms"

class c1{
sno=100
}
class c2{
uname="scott"
}

@Injectable()
class clsinj{
clsobj1=new c1();
clsobj2=new c2()
}

@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1{
t1;t2;
constructor(@Inject(clsinj) private obj)
{
this.t1=obj.clsobj1.sno
this.t2=obj.clsobj2.uname
}
funmod(){
this.obj.clsobj1.sno=this.t1;
this.obj.clsobj2.uname=this.t2
}
}

@Component({selector:"s2",templateUrl:"views/t2.htm"})
class cls2{
t1;t2;
constructor(@Inject (clsinj) public obj)
{
this.t2=obj.clsobj1.sno;
this.t1=obj.clsobj2.uname;
}
funget(){
this.t2=this.obj.clsobj1.sno
this.t1=this.obj.clsobj2.uname;

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

