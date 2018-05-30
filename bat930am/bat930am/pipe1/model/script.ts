import {Component,Pipe,PipeTransform} from "@angular/core"
import {NgModule}  from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Pipe({name:"p1"})
class clspipe1 implements PipeTransform{
 transform(x){
 return x.toUpperCase()
 }
}

@Pipe({name:"p2"})
class clspipe2 implements PipeTransform{
 transform(rv){
 var str=rv[0]+rv[1]+"X-XXXX-X"+rv[8]+rv[9]
 return str
 }
}
@Pipe({name:"p3"})
class clspipe3 implements PipeTransform{
 transform(rv){
// return rv.replace(/in/g,"abcd")
return rv.split("in").join("xyzzz");
 }
}



@Pipe({name:"p5"})
class clspipe5 implements PipeTransform{
 transform(rv){
 var str=""
 for(var i=rv.length-1;i>=0;i--)
 {
 str+=rv[i]
 }
return str;
 }
}

@Pipe({name:"p6"})
class clspipe6 implements PipeTransform{
 transform(rv){
 var str=""
 for(var i=0;i<rv.length;i++)
 {
 if(i%2==0)
 str+=rv[i].toUpperCase()
 else
 str+=rv[i]
 }
return str;
 }
}



@Pipe({name:"p7"})
class clspipe7 implements PipeTransform{
 transform(rv){
 var arr=["i","ii","iii","iv","v"]
 var arr1=[1,2,3,4,5]
 
 for(i=0;i<arr1.length;i++)
 {
    if(rv==arr1[i])
    return arr[i]
 }

 }
}



@Pipe({name:"p4"})
class clspipe4 implements PipeTransform{
 transform(rv){
 var arr=rv.split("in")
var str=""
for(var i=0;i<arr.length-1;i++)
{
if(i!=1)
str+=arr[i]+"in"
else
str+=arr[i]+"iinnn"

}
return str
 }
}

@Component({selector:"s1",templateUrl:"views/pro1.html"})
class cls1
{
uname="alex"
}
@Component({selector:"sel1"})
class cls2{}

@NgModule({
declarations:[cls1,clspipe1,clspipe7,clspipe6,clspipe5,clspipe4,clspipe2,clspipe3],
	imports:[BrowserModule],
	bootstrap:[cls1]
})
class clsmod
{
}

platformBrowserDynamic().bootstrapModule(clsmod)