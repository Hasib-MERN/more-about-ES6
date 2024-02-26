const glass = {
    name : "glass",
    color : "golden",
    price : 23,
    isCleaned :true
}


console.log(glass);
const keys = Object.keys(glass)
console.log(keys);
const values = Object.values(glass);
console.log(values);

// ata dile prottekta property akta array hoyae jabe ar sob gulo array arekta array ar moddah thakbe.
const doubleArray = Object.entries(glass);
console.log(doubleArray);
