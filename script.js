const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'afc1298f2cmsh5265a5e813177c9p156124jsn19556f965ce1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'afc1298f2cmsh5265a5e813177c9p156124jsn19556f965ce1',
		'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
	}
};


var chechHumidity;
let dusktime = "";
let dawntime = "";
let timing = "";
getTime = (city)=> {
    fetch('https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city='+city, options1)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        timing = response.datetime;
        dayWeek.innerHTML = response.day_of_week;
        dateTime.innerHTML = response.datetime;
    })
	.catch(err => console.error(err));
}



getWeather = (city)=> {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
    .then((response) => {
        console.log(response)
        wind_speed.innerHTML = response.wind_speed
        //wind_degrees.innerHTML = response.wind_degrees
        chechHumidity = response.humidity;
        temp.innerHTML = response.temp;
        humidity.innerHTML = chechHumidity;
        //sunset.innerHTML = response.sunset
        var sunrisetime = response.sunrise;
        var sunsettime = response.sunset;
        var date1 = new Date(sunrisetime * 1000);
        var date2 = new Date(sunsettime * 1000);
        dusktime = date1.toLocaleTimeString("en-US");
        sunrise.innerHTML = dusktime;
        dawntime = date2.toLocaleTimeString("en-US");
        sunset.innerHTML = dawntime;
        changePic();
        min_temp.innerHTML = response.min_temp
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        //sunrise.innerHTML = response.sunrise
        max_temp.innerHTML = response.max_temp
        temp2.innerHTML = response.temp
        humidity2.innerHTML = response.humidity
        wind_speed2.innerHTML = response.wind_speed
        
    })
	.catch(err => console.error(err));
};
let val = "";
submit.addEventListener("click", (e)=> {
    val = city.value;
    e.preventDefault();
    getWeather(val);
    getTime(val);
    document.getElementById('cityName').innerText = val;
})
document.getElementById('cityName').innerText = "Agra";
getWeather("Agra");
getTime("Agra");


getDelhi = ()=> {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
    .then((response) => {

        dcloud_pct.innerHTML = response.cloud_pct
        dfeels_like.innerHTML = response.feels_like
        dhumidity.innerHTML = response.humidity;
        dmax_temp.innerHTML = response.max_temp
        dmin_temp.innerHTML = response.min_temp
        //dsunrise.innerHTML = response.sunrise
        //dsunset.innerHTML = response.sunset
        dtemp.innerHTML = response.temp
        dwind_degrees.innerHTML = response.wind_degrees
        dwind_speed.innerHTML = response.wind_speed
        var sunrisetime = response.sunrise;
        var sunsettime = response.sunset;

        var date1 = new Date(sunrisetime * 1000);
        var date2 = new Date(sunsettime * 1000);
        dsunrise.innerHTML = date1.toLocaleTimeString("en-US");
        dsunset.innerHTML = date2.toLocaleTimeString("en-US");

    })
	.catch(err => console.error(err));
};

getDelhi();

getMathura = ()=> {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mathura', options)
	.then(response => response.json())
    .then((response) => {


        mcloud_pct.innerHTML = response.cloud_pct
        mfeels_like.innerHTML = response.feels_like
        mhumidity.innerHTML = response.humidity
        mmax_temp.innerHTML = response.max_temp
        mmin_temp.innerHTML = response.min_temp
        //msunrise.innerHTML = response.sunrise
        //msunset.innerHTML = response.sunset
        mtemp.innerHTML = response.temp
        mwind_degrees.innerHTML = response.wind_degrees
        mwind_speed.innerHTML = response.wind_speed
        var sunrisetime = response.sunrise;
        var sunsettime = response.sunset;
        var date1 = new Date(sunrisetime * 1000);
        var date2 = new Date(sunsettime * 1000);
        msunrise.innerHTML = date1.toLocaleTimeString("en-US");
        msunset.innerHTML = date2.toLocaleTimeString("en-US");

    })
	.catch(err => console.error(err));
};

getMathura();

function changePic(){
    //dusktime
    //dawntime
    const arrtime = dawntime.split(":");
    const arrtime2 = dusktime.split(":");
    var houur = arrtime[0];
    houur += 12;
    const houur2 = arrtime2[0];
    let datepre = new Date();
    var hourCheck = datepre.getHours();
    if(hourCheck <= 10){
        hourCheck += 12;
    }
    document.write(hourCheck);
    if(hourCheck >= houur || hourCheck >= 0 && hourCheck <= houur2){
        document.getElementById('cardtemp').style.backgroundImage="url('https://images.pexels.com/photos/416823/pexels-photo-416823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        document.getElementById('cardtemp').style.backgroundPosition = "bottom";
        document.getElementById('cardtemp').style.color = "lightgrey";
        document.getElementById('bodybg').style.color = "white";
        document.getElementById('bodybg').style.backgroundImage="url('https://images.pexels.com/photos/416823/pexels-photo-416823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        for(let i = 0; i < 3; i++){
            document.getElementsByClassName("card-header py-3")[i].style.backgroundColor = "lightgrey";
            
        }
        document.getElementsByClassName("tr0")[0].style.color = "lightgrey";
        document.getElementsByClassName("tr1")[0].style.color = "lightgrey";
        document.getElementsByClassName("tr2")[0].style.color = "lightgrey";
        document.getElementById('tabu').style.backgroundColor = "rgba(0,0,0,0.3)";  
    }
    if(chechHumidity >= 55){
        document.getElementById('cardtemp').style.backgroundImage="url('https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        document.getElementById('cardtemp').style.color = "black";
    }
}

