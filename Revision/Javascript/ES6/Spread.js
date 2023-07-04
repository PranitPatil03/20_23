const number=[1,2,3,4,5,6,7]

function addNumbers(a,b,c){
    return a + b + c;
}
    
// const res=addNumbers(1,3,4)

// console.log(res)

const res=addNumbers(...number)

console.log(res)

