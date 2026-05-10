function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    // return this
}
const userOne=new User("Abhishek",12,true)
const userTwo=new User("Harsh",8,false)
console.log(userOne);
console.log(userTwo);

