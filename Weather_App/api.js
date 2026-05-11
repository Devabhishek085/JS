const button=document.querySelector("#search-button")
const input=document.querySelector("#city-input")
const cityname=document.querySelector("#city-name")
const citytime=document.querySelector("#city-time")
const citytemp=document.querySelector("#city-temp")


async function getData(cityName) {
  const promise=await fetch(`https://api.weatherapi.com/v1/current.json?key=59da29026f8842eba9851349261105%20&q=${cityName}&aqi=no`)
  return await promise.json()
}






button.addEventListener("click",async function(){
  const value=input.value
  const result = await getData(value)
  cityname.innerText=`${result.location.name},${result.location.region},-${result.location.country}`
  citytime.innerText=result.location.localtime
  citytemp.innerText=result.current.temp_c
})





