// sample url from Open Weather   https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22

//api.openweathermap.org/data/2.5/weather?zip=53532,us&appid=444624b70d6f58957ab9bb844403d055

//api key = 444624b70d6f58957ab9bb844403d055

$("#search").click(function () {

    //variables for the OpenWeather API URL
    var apiLink = 'api.openweathermap.org/data/2.5/weather';
    var apiKey = '444624b70d6f58957ab9bb844403d055';
    var zipInput = $('#zipCode').val();
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey;

    console.log(apiURL);


    $.get(apiURL, function (responseFromOW) {
        console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("name:", responseFromOW.name);
        console.log("description:", responseFromOW.weather[0].description);
        
        var temp = responseFromOW.main.temp;
        var name = responseFromOW.name;
        var description = responseFromOW.weather[0].description;

    });
});
