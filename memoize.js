function memoize(fn,limit){
    let map=new Map();
    return function(...args){
        let key=JSON.stringify(args);
        if(map.has(key)){
            let v=map.get(key)
            map.delete(key);
            map.set(key,v);
            
            return map.get(key);
        }
        console.log(map.size)
        if(map.size>=limit){
            for(let [k,v] of map){
                map.delete(k);
                break;
            }
        }
            let res=fn(...args);

            map.set(key,res);
            return res;
        
    }
}

function sum(a,b){
    return a+b;
}
let memo=memoize(sum,3);
console.log(memo(20,30));

console.log(memo(30,20));
console.log(memo(60,90));
console.log(memo(10,90));