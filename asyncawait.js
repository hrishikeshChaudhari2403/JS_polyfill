function abc(value){
    const p=new Promise((res,rej)=>{
        if(value===2){
            res(value);
        }        
        else{
            rej("Error");
        }
    })
    return p;
    //  return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if (value > 0) {
    //             resolve({ id: value, name: "John Doe" });
    //         } else {
    //             reject("Invalid user ID");
    //         }
    //     }, 1000);
    // });
}

function *asyncawait(value){
    console.log("a");
    let inp=yield;
    console.log("het"+inp)
    let res= yield value(inp)
    console.log(res)
    console.log("B")
}
const it=asyncawait(abc);

it.next()
function run(it,inp){
    const k=it.next(inp);
    if(k.done){
        return;
    }
    else{
        console.log(k.value)
        Promise.resolve(k.value).then((res)=>{
            // console.log(res)
            run(it,res)
        })
        .catch((err)=>{
            
             try {
                run(it, err);
            } catch (e) {
                console.log("Unhandled error:", e);
            }
        })
    }
}
// run(it,2)
run(it,1)

