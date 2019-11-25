// sample url from Open Weather   https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22

//api.openweathermap.org/data/2.5/weather?zip=53532,us&appid=444624b70d6f58957ab9bb844403d055

//api key = 444624b70d6f58957ab9bb844403d055

$("#search").click(function () {

    //variables for the OpenWeather API URL
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = '444624b70d6f58957ab9bb844403d055';
    var apiUnits = '&units=imperial';
    var zipInput = $('#zipCode').val();
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey + apiUnits;

    console.log(apiURL);


    $.get(apiURL, function (responseFromOW) {
        console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("name:", responseFromOW.name);
        console.log("description:", responseFromOW.weather[0].description);

        var temp = responseFromOW.main.temp;
        var name = responseFromOW.name;
        var description = responseFromOW.weather[0].main;
        var clear = "<img src=/images/sunny.png>";
        var clouds = "<img src=/images/partlycloudy.png>";
        var drizzle = "<img src=/images/rainshower.png>";
        var rain = "<img src=/images/rain.png>";
        var thunderstorm = "<img src=/images/thunderstorm.png>";
        var snow = "<img src=/images/snow.png>";
        var mist = "<img src=/images/mist.png>";


        $('.place').html(responseFromOW.name);
        $('.temp').html(Math.round(responseFromOW.main.temp) + "&deg;")
        $('.description').html(responseFromOW.weather[0].main)



        if (responseFromOW.weather[0].main === "Clear") {
            $('.circle').css("background-image", "url(images/sunny.png)")


        } else if (responseFromOW.weather[0].main === "Clouds") {
            $('.circle').css("background-image", "url(images/cloudy.png)")
        } else if (responseFromOW.weather[0].main === "Drizzle") {
            $('.circle').css("background-image", "url(images/rainshower.png)")

        } else if (responseFromOW.weather[0].main === "Rain") {
            $('.circle').css("background-image", "url(images/rain.png)")

        } else if (responseFromOW.weather[0].main === "Thunderstorm") {
            $('.circle').css("background-image", "url(images/thunderstorm.png)")

        } else if (responseFromOW.weather[0].main === "Snow") {
            $('.circle').css("background-image", "url(images/snow.png)")

        } else if (responseFromOW.weather[0].main === "Mist") {
            $('.circle').css("background-image", "url(images/mist.png)")

        }


    });
});
