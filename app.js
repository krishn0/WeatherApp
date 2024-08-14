const apikey = '737a1deee7517118e0c0d1aebac751d3'
let apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric "
let icon = document.getElementById('weather-icon')
let input = document.getElementById('city') 
let btn = document.getElementById('btn')

async function  wether(city) {
   
   const  response =  await fetch(apiUrl+`&appid=${apikey}`+`&q=${city}`)
   if(response.status==404){
    document.getElementById('error').style.display="block"
    document.getElementById('nw').style.display="none"

   }

   var data = await response.json()


   
         document.getElementById('city-name').innerText= data.name 
         document.getElementById('temperature').innerText= Math.round(data.main.temp)+"'°C'"
         document.getElementById('humidity').innerText="Humidity: "+Math.round(data.main.humidity)+'%'
          document.getElementById('wind-speed').innerText="Wind Speed :"+data.wind.speed +" km/h" 
          document.getElementById('description').innerText="Description : "+data.weather[0].main
           
          if(data.weather[0].main === 'Clouds') {


                 icon.src="images/clouds.png"

          }

         else if(data.weather[0].main=="Mist"){
            icon.src="images/mist.png"
         }
            else if(data.weather[0].main=="Snow"){
icon.src="images/snow.png"
            }
                else if(data.weather[0].main=="Rain"){
icon.src="images/rain.png"

                }
                    else if(data.weather[0].main == "Clear"){


                        icon.src="images/clear.png"
                    }
                    else if(data.weather[0].main == "Haze"){


                        icon.src="images/haze.png"
                    }

                    document.getElementById('nw').style.display="block"
                    document.getElementById('error').style.display="none"
                }
    
wether()

btn.addEventListener("click",()=>{


    wether(input.value)


})
