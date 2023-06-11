let a=5;
let b=4;

const product=(x,y)=>{
    return x*y;
}

console.log(product(a,b));

const person={
    name:"Bablu",
    age:26,
    greet(){
        console.log("hi i am "+this.name)
    }
}
person.greet()