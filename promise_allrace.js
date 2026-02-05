Promise.myAll=function(args){
    
    let n=args.length;
    let completed=0;
    // let result=[]
    return new Promise((res,rej)=>{
        for(let i=0;i<n;i++){
             Promise.resolve(args[i])
             .then((res1)=>{
                completed++;
                
                     
                    res(res1);
                
             })
             .catch((err)=>{
               
                
              
                    
                    rej(err);
                
             })
        }
    })


}

function a1(value){
    return new Promise((res,rej)=>{
        if(value==1) res(value)
        else rej("error1")
    })

}
function a2(value){
    return new Promise((res,rej)=>{
        if(value==2) res(value)
        else rej("error2")
    })

}
function a3(value){
    return new Promise((res,rej)=>{
        if(value==3) res(value)
        else rej("error3")
    })

}

Promise.myAll([a1(3),a2(1),a3(2)])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
