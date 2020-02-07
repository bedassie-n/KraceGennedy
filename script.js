//Version 0.3.1

let appId = "f53fbf01c28e747d1a37c1514dad5367";
let days = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}

/*Makes use of jQuery API, instead of fetch API*/ 
function getKingstonWeather() {
    var result;
    $.get(`https://api.openweathermap.org/data/2.5/forecast?id=3489854&APPID=`+appId, function(data, status) {
        if(status == 'success') {
            dateCheck = true;
            var dateInQuestion;
            var element = 1;
            for(i = 0; i < (data.list).length; i++) {
                currentDate = (data.list[i].dt_txt.split(" "))[0];
                if(dateCheck == true){
                    dateCheck = false;
                    dateInQuestion = (data.list[i].dt_txt.split(" "))[0];
                    var weatherDescription= document.getElementById(`weatherConditionKingston${element}`);
                    dateTime = data.list[i].dt_txt.split(" ");
                    dArr = (dateTime[0].split("-") +","+ dateTime[1].split(":")).split(",");
                    date = new Date(parseInt(dArr[0],10),parseInt(dArr[1]-1,10),parseInt(dArr[2]),parseInt(dArr[3],10),parseInt(dArr[4],10),parseInt(dArr[5],10));
                    let dayAndDate = document.getElementById(`KingstonDayAndDate${element}`);
                    let weatherCondition = document.getElementById(`weatherConditionKingston${element}`);
                    let weatherIcon = document.getElementById(`documentIconImgK${element}`);
                    weatherIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
                    dayAndDate.innerHTML =  date.toString();
                    weatherDescription.innerHTML = data.list[i].weather[0].description;
                } else if(dateInQuestion != currentDate){
                    dateCheck = true;
                    element += 1;
                }
            }
        }
    })
}
function getMontegoBayWeather() {
    var result;
    $.get(`https://api.openweathermap.org/data/2.5/forecast?id=3489460&APPID=`+appId, function(data, status) {
        if(status == 'success') {
            dateCheck = true;
            var dateInQuestion;
            var element = 1;
            for(i = 0; i < (data.list).length; i++) {
                currentDate = (data.list[i].dt_txt.split(" "))[0];
                if(dateCheck == true){
                    dateCheck = false;
                    dateInQuestion = (data.list[i].dt_txt.split(" "))[0];
                    var weatherDescription= document.getElementById(`weatherConditionMontegoBay${element}`);
                    dateTime = data.list[i].dt_txt.split(" ");
                    dArr = (dateTime[0].split("-") +","+ dateTime[1].split(":")).split(",");
                    date = new Date(parseInt(dArr[0],10),parseInt(dArr[1]-1,10),parseInt(dArr[2]),parseInt(dArr[3],10),parseInt(dArr[4],10),parseInt(dArr[5],10));
                    let dayAndDate = document.getElementById(`MontegoBayDayAndDate${element}`);
                    let weatherCondition = document.getElementById(`weatherConditionMontegoBay${element}`);
                    let weatherIcon = document.getElementById(`documentIconImgMB${element}`);
                    weatherIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
                    dayAndDate.innerHTML =  date.toString();
                    weatherDescription.innerHTML = data.list[i].weather[0].description;
                } else if(dateInQuestion != currentDate){
                    dateCheck = true;
                    element += 1;
                }
                
            }
        }
    })
}

function init(){
    getKingstonWeather();
    getMontegoBayWeather();
    
}

init();
