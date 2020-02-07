//Version 1.0.1

//Personal OpenWeatherAPI Key
let appId = "f53fbf01c28e747d1a37c1514dad5367";
let KingstonID = "3489854"
let MontegoBayID = "3489460"
/*Makes use of jQuery API, instead of fetch API. Receives JSON file with 5 Day weather details 
  and sets HTML webpage info accordingly for Kingston.
*/ 

function getWeather(id, city) {
    //jQuery get request for weather info.
    $.get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=`+appId, function(data, status) {
        
        if(status == 'success') {
            // Used to limit 1 time for each day in the 5 day forecast.
            dateCheck = true;
            // date to limit
            var dateInQuestion;
            //Used to track divisions for the 5 days.
            var element = 1;
            //Iterates through weather info for every three hours, as in JSON file.
            for(i = 0; i < (data.list).length; i++) {
                //returns date in the form '2020-01-01'
                currentDate = (data.list[i].dt_txt.split(" "))[0];
                //if limit has not been reached (limit is 1)
                if(dateCheck == true){
                    //Indicate limit has been reached.
                    dateCheck = false;
                    //returns date in the form '2020-01-01'
                    dateInQuestion = (data.list[i].dt_txt.split(" "))[0];

                    // Get elements for each day
                    var weatherDescription= document.getElementById(`weatherCondition${city}${element}`);
                    let dayAndDate = document.getElementById(`${city}DayAndDate${element}`);
                    let weatherCondition = document.getElementById(`weatherCondition${city}${element}`);
                    let weatherIcon = document.getElementById(`documentIconImg${city}${element}`);

                    //gets date and time field from JSON file
                    dateTime = data.list[i].dt_txt.split(" ");
                    //splits it into seperate string ints
                    dArr = (dateTime[0].split("-") +","+ dateTime[1].split(":")).split(",");
                    //creates a Date Object with parsed string ints
                    date = new Date(parseInt(dArr[0],10),parseInt(dArr[1]-1,10),parseInt(dArr[2]),parseInt(dArr[3],10),parseInt(dArr[4],10),parseInt(dArr[5],10));
                    //assigns suitable icon based on weather conditions
                    weatherIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
                    //displays time of weather condition forecast
                    dayAndDate.innerHTML =  date.toString();
                    //displays description of forecast
                    weatherDescription.innerHTML = data.list[i].weather[0].description;
                }//skips to the next day
                 else if(dateInQuestion != currentDate){
                    dateCheck = true;
                    //increments division in HTML
                    element += 1;
                }
            }
        }
    })
}

getWeather(MontegoBayID, "MontegoBay");
getWeather(KingstonID, "Kingston");