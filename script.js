//Version 1.1

//Personal OpenWeatherAPI Key
let appId = "f53fbf01c28e747d1a37c1514dad5367";
let KingstonID = "3489854"
let MontegoBayID = "3489460"
/* Makes use of jQuery API, instead of fetch API. Receives JSON file with 5 Day weather details 
  and sets HTML webpage info accordingly for Kingston.
*/ 

function getWeather(id, city) {
    //jQuery get request for weather info.
    $.get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=`+appId, function(data, status) {
        
        if(status == 'success') {
            var element = 1;
            //Iterates through weather info for every three hours, as in JSON file.
            for(i = 0; i < (data.list).length; i++) {
                //returns date in the form '2020-01-01'
                currentTime = (data.list[i].dt_txt.split(" "))[1];
                //if time is 9:00 am since thats when most persons are travelling to work. (7 am would be more appropriate but not available with API.
                if(currentTime == "09:00:00"){

                    // Get elements for each day
                    var weatherDescription= document.getElementById(`weatherCondition${city}${element}`);
                    let dayAndDate = document.getElementById(`${city}DayAndDate${element}`);
                    let weatherCondition = document.getElementById(`weatherCondition${city}${element}`);
                    let weatherIcon = document.getElementById(`documentIconImg${city}${element}`);

                    //gets date and time field from JSON file
                    dateTime = data.list[i].dt//.split(" ");
                    //splits it into seperate string ints 
                    
                    //creates a Date Object with parsed string ints
                    //year, month, day, hours, minutes, seconds, milliseconds
                    //date = new Date(parseInt(dArr[0],10),parseInt(dArr[1]-1,10),parseInt(dArr[2]),parseInt(dArr[3],10),parseInt(dArr[4],10),parseInt(dArr[5],10));
                    newDate = new Date(dateTime*1000);
                    //assigns suitable icon based on weather conditions
                    weatherIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
                    //displays time of weather condition forecast
                    dayAndDate.innerHTML =  newDate.toString();
                    //displays description of forecast
                    weatherDescription.innerHTML = data.list[i].weather[0].description;
                    element += 1;
                }
            }
        }
    })
}

getWeather(MontegoBayID, "MontegoBay");
getWeather(KingstonID, "Kingston");