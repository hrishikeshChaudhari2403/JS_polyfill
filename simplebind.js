function abc(){
    console.log("Hey "+this.name)
}
const obj={
    name:"Hrishikesh"
}

const k=abc.bind(obj);
k();
const k1=new k();//caall
