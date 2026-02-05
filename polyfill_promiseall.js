Promise.myAll=function(args){
    let n=args.length;
    let completed=0;
    let result=[]
    return new Promise((res,rej)=>{
        for(let i=0;i<n;i++){
             Promise.resolve(args[i])
             .then((res1)=>{
                completed++;
                result.push(res1)
                if(completed===n){
                    
                    res(result);
                }
             })
             .catch((err)=>{
                rej(err)
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

Promise.myAll([a1(1),a2(2),a3(4)])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
