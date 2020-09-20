function Toggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  const btn = document.getElementById("myBtn");

btn.addEventListener("click",(e)=>{

    var country = document.getElementById("country").value
    var url = "https://api.covid19api.com/live/country/" + country;
    covidData(url)
    e.preventDefault()
    document.getElementById("country").value = ""
})

 async function covidData(url){
   let response = await fetch(url);
  console.log(response)
   let data = await response.json()
   console.log(data)
   
   let length = data.length;
   let index = length -1;

   let confirmed = document.getElementById("confirmed");
   let recovered = document.getElementById("recovered");
   let deaths = document.getElementById("deaths");

   confirmed.innerHTML = ("Confirmed Cases : "  + data[index].Confirmed)
   recovered.innerHTML = ("Recovered Cases : "  + data[index].Recovered)
   deaths.innerHTML = ("Deaths : " + data[index].Deaths)

}
 
