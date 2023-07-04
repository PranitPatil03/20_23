//Normal fucntion 

// function addNumbers(a,b){
//     return a+b;
// }

// const sum=addNumbers(1,2);

// console.log(sum);

// Fucntion with extra arguments

// Rest 

function addNumbers(a,b,...other){
    console.log(other);
    return a+b;
}

const sum=addNumbers(1,2,3,4,5,6,7);

console.log(sum);

