const insert=document.querySelector("#insert")
window.addEventListener("keydown",function(e){
  console.log(e.key)
  insert.innerHTML=e.key
})