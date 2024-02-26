// class Product{
//     country = 'bangladesh';

//     constructor(name){
//         this.name = name;
//     }

//     speak(talk){
//         console.log(`talking about ${talk}`)
//     }
// }
// const lenovo = new Product('parts of this');
// console.log(lenovo);
// lenovo.speak("whta do you do");

class teacher {
    constructor(name, subject){
         this.name = name;
         this.subject = subject;
    }
    lecture(){
       console.log('sir is teaching math')
    } 
}

const tapan = new teacher('tapan sir', 'physics');
console.log(tapan);
