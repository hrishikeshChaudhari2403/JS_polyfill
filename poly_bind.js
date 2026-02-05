function abc(value){
    const p = new Promise((res, rej) => {
        if(value === 2){
            res(value);
        }        
        else{
            rej("hey");
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
    let inp = yield; 
    let res = yield value(inp);  
    console.log(res);
    console.log("B");
}

const it = asyncawait(abc);
it.next();
function run(it, inp){
    // console.log(inp)
    
    const k = it.next(inp);
    if(k.done){
        return;
    }
    else{
        // console.log(k);
        Promise.resolve(k.value).then((res) => {
            console.log(k.value)
            run(it, res);
        })
        .catch((err) => {
            console.log("Error:", err);
            run(it,err)

        })
    }
}


run(it, 3);