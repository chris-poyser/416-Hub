//invoke function on page load
getQuote();
function getQuote(){
  $(function () {
    $.ajax({
      url:"//quotable.io/random?tags=wisdom&maxlength=50",
      type: "GET", //get request
      dataType: "json", //json
      success: function (jsondata){
        //clear fields and append quote
        $(".quote").empty();
        $(".quote").append("Inspiring Quote: "+jsondata.content);
      }
    });
  })
}
