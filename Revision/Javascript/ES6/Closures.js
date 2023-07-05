// const sum=function (a){
//     console.log("Hello"+a)
//     var c=8
//     return function(b){
//         return a+b+c;
//     }
// }

// var store=sum(2)

// console.log(store(6))


const sum=(a,b,c)=>{
    return{
        getSum2: function(){
            return a+b
        },
        getSum3: function(){
            return a+b+c
        }
    }
}

// const ans=sum(3,6,9);

const ans=sum(3,6,9);

console.log(ans.getSum2());
console.log(ans.getSum3());
