const student = {
    naame : "fahad topu",
    id:"211-0098-006",
    department : "bcse",
    phone: "01934333939"
}

const {id,phone} = student;
console.log(id);
console.log(phone);

const numbr = [2,42,5];
const [a,b,c] = numbr;
console .log(a);


function double(a,b){
   return [a*2, b*2];
}
const [first, second] = double(3,4)
console.log(first,second)


const object = {
    student : "mike",
    teacher : "jhon"
}

const {student: learn ,teacher: provide} = object;
console.log(learn, provide);

// const {student, teacher} = object;
console.log(student, teacher);