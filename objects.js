const mySym=Symbol("key1")


const JsUser={
    name: "Abhishek",
    "full-name":"Abhishek Pal",
    [mySym]: "mykey1"
}
// console.log(JsUser.full-name);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

