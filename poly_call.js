function abc(v1,v2){
    console.log(this.name)
    console.log(v1,v2)
}
const obj={
    name:"Hrishikesh"
}

const obj2={
    greet:function(){
        console.log(this.name)
    }
}
Object.defineProperty(Function.prototype,'callMethod',{
    value:function(obj,...args){
        let func=Symbol();
        let ans=obj;
        ans["func"]=this;
        ans["func"](...args);
        // console.log(ans["func"])
        delete ans["func"]
        
    }
})
abc.callMethod(obj,10,20);
