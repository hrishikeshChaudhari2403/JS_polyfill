function abc(v1,v2){
    console.log(this.name,v1,v2)
}
let obj={
    name:"Hrishikesh"
}
Function.prototype.applyMethod=function(obj,args){
    if(!Array.isArray(args)){
        throw new Error("argument should be array");
    }
    let ans=obj;
    let func=Symbol();
    ans["func"]=this;
    ans["func"](...args);
    delete ans["func"]
}

abc.applyMethod(obj,[10,20])