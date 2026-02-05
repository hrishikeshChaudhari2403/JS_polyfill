function deepCopy(obj,map){  
    if(map.has(obj)){
        return map.get(obj);
    }
    let obj1 = {}; 
    map.set(obj,obj1)
    for (let key in obj){ 
        if (typeof obj[key] !== 'object') { 
          
            obj1[key] = obj[key];  
           
        } else {
         
            obj1[key] = deepCopy(obj[key],map); 

        } 
    }
    return obj1; 
} 

const user = {
  name: "Hrishikesh",
  address: {
  }
};

user.address.owner = user;
let map=new Map();

const ans=deepCopy(user,map)

console.log(ans)