function abc(){
    console.log("Hey "+this.name)
}
const obj={
    name:"Hrishikesh"
}
 
 
Function.prototype.myBind = function(...args){
    let fun = this;
    let obj = args[0];
    let args1 = args.slice(1);
    return function boundFn(...args2){
        // const isNew = this instanceof boundFn;
        fun.apply(obj,[ ...args1, ...args2]);
//          fun.apply(
//     isNew ? this : obj,
//     args
//   );
    }
}
 
const b=abc.myBind(obj);
b();
console.log(b)
const k=new b();
console.log(k)
