const difference = (x,y) => x-y ;
const diff = difference(3,2);
console.log(diff);


//single parameter
const getAge = (person) => person.age;
const student = {name:'masud' ,age : 35};
const age = getAge(student);
console.log(age)

const  getValue = numbers => numbers[3];
const get = getValue([2,3,4,56,67,5]);
console.log(get);

// no parameter

const getPi = () => Math.PI;
console.log(getPi())

 const doMath = (a,b,c) => {
    const sum = a+b+c;
    const multple = a*b*c;
    const result = sum+ multple;
    return result;
 }

 const math = doMath(2,3,4);
 console.log(math)
