const data=[
    {name:"pranit",age:20},
    {name:"nikhil",age:18}
]

const getData=() =>{
    setTimeout(() => {
        let res="";
        data.forEach((data) =>
            res+=`<li>${data.name} ${data.age}</li>`
        )
        document.body.innerHTML=res
    }, 2000);
}

// callbacks

// const createData=(newData,callback)=>{
//     setTimeout(() => {
//         data.push(newData);
//         callback()
//     }, 3000);
// }

// createData({name:"test",age:12},getData)

// Promise

const createData=(newData)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            data.push(newData);
            let err=false
            if(!err){
                resolve()
            }else{
                reject()
            }
        }, 3000);  
    })
}

// createData({name:"test",age:12}).then(getData)

// async & await

// async const data1=()=>{
//     await createData({name:"test",age:12})
// }

// data1();

async function data2(){
    await createData({name:"test",age:12});
    getData();
}

data2()