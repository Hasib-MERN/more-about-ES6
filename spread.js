const mx = Math.max(2,3,4,5,6,78,6);
console.log(mx);


// spraed operator if we print an max number array  without spraead operator this time provide NaN
// but if we use spread operetor this time provide proper output.
// spraed operator declared 3 dot (... varaiable name) 
const arrayMax = [12,4,5,66,7,77,4,3,33,55,4,3,7];
const max = Math.max(...arrayMax)
console.log(max);


const   array = [2,1,4,5,790,0,7,5,4,3];
const arrayMx = Math.max(...array);
console.log(arrayMx)


const roll = [2,3,1,4,5,9,12];
const allRoll = [...roll];
roll.push(100)
console.log(allRoll)

const a = Math.max(...roll);
console.log(a)

const allValue = [...array, 111000]
console.log(...allValue);