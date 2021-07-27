//using setTimeout, setInterval and clearInterval
setTimeout(()=>{
    clearInterval(count);
    console.log("Hello");

},5000);

const count = setInterval(() => {
    console.log("Counting!!!");
}, 1000);


//Running JS in a node terminal
class Animal{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }
    getDone(){
        console.log(`${this.name} has an age of ${this.age}`);
    }
}

const dog = new Animal("Puppy", "7");
dog.getDone();
//Exporting modules
module.exports = {
    count,
    dog
};
