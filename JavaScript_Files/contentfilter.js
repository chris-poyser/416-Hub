//Array for active posts.
//1st index is for Food, 2nd for Drinks and 3rd is for Desserts
//1 is for active, 0 is for inactive
var isActive=[0,0,0];

function filteredItems(className)
{
  //Update array
  var updateVal=updateArray(className);

  var displayAll=isActive[0] || isActive[1]|| isActive[2]; //OR all the buttons to know whether to display all buttons or not
  allPosts=document.getElementsByClassName("select");

  //If we are not displaying all posts, don't hide items
  if(displayAll!=0)
  {
    blockItems(allPosts);
  }
  displayItems(allPosts,displayAll);
  highlightButtons(className,displayAll);
}

//Hide All Inactive Posts
function blockItems(blockArray)
{
  for(i=0 ; i<blockArray.length; i++){
    if(blockArray[i].classList.contains("food") && isActive[0]==0){
      blockArray[i].style.display="none";
    }
    else if(blockArray[i].classList.contains("drinks") && isActive[1]==0){
      blockArray[i].style.display="none";
    }
    else if(blockArray[i].classList.contains("desserts") && isActive[2]==0){
      blockArray[i].style.display="none";
    }
  }
}

//Display Active posts
function displayItems (tempArray,displayAll)
{
    for(i=0; i<tempArray.length; i++){
      //Only Display Selected Posts
      if(displayAll!=0)
      {
        if(tempArray[i].classList.contains("food") && isActive[0]==1){
          tempArray[i].style.display="block";
        }
        else if(tempArray[i].classList.contains("drinks") && isActive[1]==1){
          tempArray[i].style.display="block";
        }
        else if(tempArray[i].classList.contains("desserts") && isActive[2]==1){
          tempArray[i].style.display="block";
        }
      }
      //Otherwise Display All of the Posts
      else{
        tempArray[i].style.display="block";
      }
    }
}

//Update the values of our active array for all buttons
function updateArray(className){
  //XOR used to toggle the bits
  switch (className){
    case "food":
      isActive[0]^=1;
      return 0;
      break;
    case "drinks":
      isActive[1]^=1;
      return 1;
      break;
    case "desserts":
      isActive[2]^=1;
      return 2;
      break;
  case "all":
    isActive[0]=0;
    isActive[1]=0;
    isActive[2]=0;
    return 3;
    break;
  }
}
function highlightButtons(className,displayAll){
  //Get Button Elements
  var buttonFood=document.getElementById('filter1');
  var buttonDrinks=document.getElementById('filter2');
  var buttonDessert=document.getElementById('filter3');
  var buttonAll=document.getElementById('filter4');

  //Highlight the Display All button and remove the highlight for Food, Drinks and Dessert button
  if(displayAll==0)
  {
    buttonFood.classList.remove("highlight");
    buttonDrinks.classList.remove("highlight");
    buttonDessert.classList.remove("highlight");
    buttonAll.style.color="#5B88C4";
  }
  else{
    //Remove Highlight for Display All Button
    buttonAll.style.color="white";

    //Toggle the highlight of the Food, Drinks and Dessert Buttons
    switch(className){
    case "food":
      buttonFood.classList.toggle("highlight");
      break;
    case "drinks":
      buttonDrinks.classList.toggle("highlight");
      break;
    case "desserts":
      buttonDessert.classList.toggle("highlight");
      break;
    }
  }
}
