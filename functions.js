function addNumbers(num1,num2){
    return num1+num2
}
// res=addNumbers(4,5)
// console.log(res);

function loginUserMessage(username){
    return `${username} just logged in`
}
// res=loginUserMessage("Abhishek");
// console.log(res);

function calculateCartPrice(...num){
    return num
}
// console.log(calculateCartPrice(100,200,300));

const user={
    username: "Abhishek",
    price:199
}
function createObj(user){
    console.log(`username is ${user.username} and price is ${user.price}`);
}
createObj(user);
