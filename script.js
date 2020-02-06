//Version 0.2.1

let appId = "f53fbf01c28e747d1a37c1514dad5367";

/*Makes use of jQuery API, instead of fetch API*/ 
function getKingstonWeather() {
    var result;
    $.get(`https://api.openweathermap.org/data/2.5/forecast?id=3489854&APPID=`+appId, function(data, status) {
        if(status == 'success') {
            var weatherDescription= document.getElementById("KingstonDescription");
            for(i = 1; i < 6; i++) {
                let dayAndDate = document.getElementById(`KingstonDayAndDate${i}`);
                let weatherCondition = document.getElementById(`weatherConditionKingston${i}`);
                let weatherIcon = document.getElementById(`documentIconImgK${i}`);

                weatherIcon.src = 'http://openweathermap.org/img/wn/'+data.list[0].weather[0].icon+'.png';

            }
            
            
            
            
            //alert("Data: " + data + "\nStatus: " + status)
            /*switch(data.list[0].weather[0].main){
                case 'Clear':
                    document.getElementById("KingstonContainer").style.backgroundImage = 'url("clearSky.jpg")';
                    break;

                case 'Clouds':
                    document.getElementById("KingstonContainer").style.backgroundImage = 'url("cloudy.jpg")';
                    break;

                case 'Rain':
                case 'Drizzle':
                case 'Mist':
                    document.getElementById("KingstonContainer").style.backgroundImage = 'url("rainy.jpg")';
                    break;

                case 'Thunderstorm':
                    document.getElementById("KingstonContainer").style.backgroundImage = 'url("thunderstorm.jpg")';
                    break;

                default:
                    break;*/
            
        }
    })
}
function getMontegoBayWeather() {
    var result;
    $.get(`https://api.openweathermap.org/data/2.5/forecast?id=3489460&APPID=`+appId, function(data, status) {
        if(status == 'success') {
            var weatherDescription= document.getElementById("MontegoBayDescription");
            for(i = 1; i < 6; i++) {
                let dayAndDate = document.getElementById(`MontegoBayDayAndDate${i}`);
                let weatherCondition = document.getElementById(`weatherConditionMontegoBay${i}`);
                let weatherIcon = document.getElementById(`documentIconImgMB${i}`);

                weatherIcon.src = 'http://openweathermap.org/img/wn/'+data.list[0].weather[0].icon+'.png';
            }
            //alert("Data: " + data + "\nStatus: " + status)
            /*switch(data.list[0].weather[0].main){
                case 'Clear':
                    document.getElementById("MontegoBayContainer").style.backgroundImage = 'url("clearSky.jpg")';
                    break;

                case 'Clouds':
                    document.getElementById("MontegoBayContainer").style.backgroundImage = 'url("cloudy.jpg")';
                    break;

                case 'Rain':
                case 'Drizzle':
                case 'Mist':
                    document.getElementById("MontegoBayContainer").style.backgroundImage = 'url("rainy.jpg")';
                    break;

                case 'Thunderstorm':
                    document.getElementById("MontegoBayContainer").style.backgroundImage = 'url("thunderstorm.jpg")';
                    break;

                default:
                    break;*/
            
        }
    })
}


function init(){
    getKingstonWeather();
    getMontegoBayWeather();
    
}

init();
