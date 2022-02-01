//email fields class to store email fields
class emailFields {
  constructor(recommendation,from_name,from_email,location,message) {
    this.recommendation=recommendation;
    this.from_name=from_name;
    this.from_email=from_email;
    this.location=location;
    this.message=message;
  }

}

//Submit Form function. Submits form to my email address
function submitForm(myEmail){
  //getemailFields object
  var getemailFields={
    recommendation:myEmail.recommendation,
    from_name:myEmail.from_name,
    from_email:myEmail.from_email,
    location:myEmail.location,
    message:myEmail.message,
  };

  emailjs.send('service_4r06s83','template_xdwqln8',getemailFields)
  .then(function(res){
    console.log("success",res.status);
  })
  alert("Your message was sent!");
}

//Displays the error message on the HTML main page
function errorMessage(fieldName,message)
{
  var x=document.getElementById(fieldName)
  x.querySelector("small").innerText=message;
}

//Error check based on the HTML field.
function errorCheck(emailField,type,fieldID)
{
  var isError=[0,0,0,0]; //array of all error checks. 0 is for pass, 1 is for fail
  if(emailField=="") //empty field check
  {
      document.getElementById(fieldID).classList.add("error");
      isError[0]=1;
  }
  else if(emailField.length<10 && type=="text") //insufficient characters check
  {
      document.getElementById(fieldID).classList.add("error");
      isError[1]=1;
  }
  else if(fieldID=="contact_email") //regular expression check for email field
  {
    const re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!(re.test(String(emailField))))
    {
      document.getElementById(fieldID).classList.add("error");
      isError[3]=1;
    }
    else{
      document.getElementById(fieldID).classList.remove("error");
    }
  }
  else if(fieldID=="contact_name") //regular expression check for numbers in Name field
  {
    const re=/.*[0-9].*/;
    if(re.test(String(emailField)))
    {
      document.getElementById(fieldID).classList.add("error");
      isError[2]=1;
    }
    else{
      document.getElementById(fieldID).classList.remove("error");
    }
  }
  else{ //passed all checks
    document.getElementById(fieldID).classList.remove("error");
  }
  return isError; //return array of all checks
}
//function called on the submit button click. Checks all email fields for correct information
function formValidate()
{

  var checks; //array of checks for all email fields
  var canSubmit=1; //bit used to check if we can submit the form

  var recommend = document.form.recommendation.value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var loc = document.getElementById("location").value;
  var msg = document.getElementById("message").value;

  //Create new emailFields objects to store form fields
  let myEmail = new emailFields(recommend,name,email,loc,msg);

  //Error Checks for Name Field
  checks=errorCheck(myEmail.from_name,"text","contact_name");
  if(checks[0]==1)
  {
    errorMessage("contact_name","Name can't be empty");
    canSubmit=0;
  }
  else if(checks[1]==1)
  {
    errorMessage("contact_name","Name has insufficent characters");
    canSubmit=0;
  }
  else if(checks[2]==1)
  {
    errorMessage("contact_name","Name can't have numerical digits");
    canSubmit=0;
  }

  //Error Checks for Email Field
  checks=errorCheck(myEmail.from_email,"text","contact_email");
  if(checks[0]==1)
  {
    errorMessage("contact_email","Email can't be empty");
    canSubmit=0;
  }
  else if(checks[1]==1)
  {
    errorMessage("contact_email","Email has insufficent characters");
    canSubmit=0;
  }
  else if(checks[3]==1)
  {
    errorMessage("contact_email","Email is not valid");
    canSubmit=0;
  }

  //Error Checks for Location field
  checks=errorCheck(myEmail.location,"text","contact_location");
  if(checks[0]==1)
  {
    errorMessage("contact_location","Location can't be empty");
    canSubmit=0;
  }
  else if(checks[1]==1)
  {
    errorMessage("contact_location","Location has insufficent characters");
    canSubmit=0;
  }

  //Error check for recommendation selection
  checks=errorCheck(myEmail.recommendation,"Selection","contact_recommendation");
  if(checks[0]==1)
  {
    errorMessage("contact_recommendation","Recommendation not Selected");
    canSubmit=0;
  }
  checks=errorCheck(myEmail.message,"text","contact_message");

  //Error checks for Message
  if(checks[0]==1)
  {
    errorMessage("contact_message","Message can't be empty");
    canSubmit=0;
  }
  else if(checks[1]==1)
  {
    errorMessage("contact_message","Message has insufficent characters");
    canSubmit=0;
  }

  //Passed all checks, submit form
  if(canSubmit)
  {
    submitForm(myEmail)
  }
}
