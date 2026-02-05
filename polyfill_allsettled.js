Promise.myAll=function(args){
    
    let n=args.length;
    let completed=0;
    let result=[]
    return new Promise((res,rej)=>{
        for(let i=0;i<n;i++){
             Promise.resolve(args[i])
             .then((res1)=>{
                completed++;
                let obj={
                    status:"fullfilled",
                    result:res1
                }
                result.push(obj)
                if(completed===n){
                     
                    res(result);
                }
             })
             .catch((err)=>{
                let obj1={
                    status:"rejected",
                    reason:err
                }
                result.push(obj1)
                completed++;
                if(completed===n){
                    
                    rej(result);
                }
             })
        }
    })


}

function a1(value){
    return new Promise((res,rej)=>{
        if(value==1) res(value)
        else rej("error")
    })

}
function a2(value){
    return new Promise((res,rej)=>{
        if(value==2) res(value)
        else rej("error")
    })

}
function a3(value){
    return new Promise((res,rej)=>{
        if(value==3) res(value)
        else rej("error")
    })

}

Promise.myAll(null)
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
