//invoke function on load
getWeather("north york");
function getWeather(city){
  //document ready event
  $(function () {
    $.ajax({
      url:"http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=3ca8147b8120873b0453bb2dd4db6915",
      type: "GET", //get request
      dataType: "jsonp", //json with padding for cross-domain
      success: function (data){
        //clear fields and then append temperature information
        $(".temp").empty();
        $(".temp").append(data.main.temp+"℃");
        $(".additional").empty();
        $(".additional").append("Forecast: "+data.name+"<br>");
        $(".additional").append("Feels like: "+data.main.feels_like+"℃<br><br>");
        $(".additional").append("Wind Speed: "+(data.wind.speed*3.6).toFixed(2)+" km/h<br>"); //convert from m/s to km/h to 2 decimal place precision
        $(".additional").append("Description: "+data.weather[0].description+"<br>");
      }
    });
  })

}
