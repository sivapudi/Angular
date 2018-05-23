import {Inject,Injectable,Component,NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule} from "@angular/forms"
@Injectable()
class clsinj{
sno=100


}

@Component({selector:"s1",templateUrl:"views/p1.html"})
class cls1{
t1;
constructor(@Inject(clsinj) private obj)
{
this.t1=obj.sno
}
funmod(){
this.obj.sno=this.t1;
}
}

@Component({selector:"s2",templateUrl:"views/t2.htm"})
class cls2{
t2;
constructor(@Inject (clsinj) public obj)
{
this.t2=obj.sno;
}
funget(){
this.t2=this.obj.sno
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

