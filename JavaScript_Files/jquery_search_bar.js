//document ready event
$(function () {
  $("#search").click(function () { //on click of the search button
    var searchPost= $("#search_box").val().toLowerCase(); //gather the entered string and convert it to lowercase
    //console.log("Entered: "+searchPost);
    $(".entry").filter(function (){
      //console.log(this);
      //console.log($(this).text().toLowerCase().indexOf(searchPost)>-1);
      var check=$(this).text().toLowerCase().includes(searchPost); //check if the entered string matches the post
      $(this).toggle(check); //hide every post that doesn't match
    });
  });
});
