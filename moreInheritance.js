class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleepin person name ${this.name}`);
    }
}

const kodom = new Person('kodom Ali', 21);
console.log(kodom);
kodom.sleep();
const badam = new Person('badam bada', 23);
console.log(badam);
