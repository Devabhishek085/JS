// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task-1");  
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("Async resolved"); 
// })
// new PromiseTwo(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task-2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const PromiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Abhi" , email:"palabhishek085@gmail.com"})
//     },1000)
// })
// PromiseThree.then(function(user){
//     console.log(user);
// })

const PromiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve({username: "Abhishek", pass: "123"})
        }
        else{
            reject("ERROR : Something went wrong")
        }
    },2000)
})
PromiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username); 
}).catch((error) => {
    console.log("Error");
})


async function getAllUsers(){
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await response.json()
        console.log(data);
    } catch (error) {
        console.log("E : ",error);
        
    }
}
getAllUsers()