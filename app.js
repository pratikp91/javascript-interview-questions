let name={
    firstName:"Pratik",
    lastName:"Pattanayak"
}
let name2={
    firstName:"manish",
    lastName:"bharti"
}
//----------------------
//call apply, bind

let printFullName=function(city,state,test){
    let str=this.firstName+", "+this.lastName+", "+city+", "+state;
    str+=test?", "+test:"";
    console.log(str);
}
let onCallApplyBind =function(){
    printFullName.call(name,"jaleswar","odisha");
    var printMyName =printFullName.bind(name2,"mumbai","maharashtra");
    printMyName();
}
//----------------------
//customBind---polyfill for bind
Function.prototype.myBind =function(...args){
    let obj=this;
    let params=args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}
let customBind =function(){
    let printMyName =printFullName.myBind(name,"jaleswar","odisha");
    printMyName("test")
}

