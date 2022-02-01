//Add method to validate that no numbers were entered
jQuery.validator.addMethod("nonumbers", function(value, element) {
	return this.optional(element) || !(/.*[0-9].*/.test(value));
}, "No Numerical Characters Allowed");

//document ready event
$(function () {
  $("form[name='form']").validate({
    rules: {
      name: {
        required: true,
        nonumbers: true,
        minlength: 10
      },
      email: {
        required: true,
        email: true, //validate email built-in function
        minlength: 10
      },
      location: {
        required: true,
        minlength: 10
      },
      recommendation: {
        required: true
      },
      Message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: "Name can't be empty",
        minlength: "Name has insufficient characters",
        lettersonly: "Name can't contain numerical characters"
      },
      email: {
        required: "Email can't be empty",
        email: "Email is not valid",
        minlength: "Email has insufficent characters"
      },
      location: {
        required: "Location can't be empty",
        minlength: "Location has insufficient characters"
      },
      recommendation: {
        required: "<br></i>Recommendation can't be empty"
      },
      Message: {
        required: "Message can't be empty",
        minlegnth: "Message has insufficient characters"
      }
    },
    submitHandler: function(form){ //upon submitting form, if all check pass send the email
      submitForm();
    },
    wrapper: 'div', //change the wrapper of the error messages to div
    errorPlacement : function(error,element){
      if(element.attr("name")=="recommendation"){ //if element is the recommendation section, place before Message title
        error.insertBefore("#contact_message");
      }
      else { //otherwise insert input text box
        error.insertAfter($(element).parent().find('i'));
      }
    },
    highlight: function(element,errorClass,validClass){ //add class error to parent element
      $(element).parent().addClass(errorClass);
      //console.log($(element).parent().attr('class'));
    },
    unhighlight: function(element,errorClass,validClass){ //remove class error from parent element
      $(element).parent().removeClass(errorClass);
    },
    errorElement:"small"
  });
});

//Submit Form function. Submits form to my email address
function submitForm(){
  var getemailFields={
    recommendation:$('form input[type=radio]:checked').val(),
    from_name:$("#name").val(),
    from_email:$("#email").val(),
    location:$("#location").val(),
    message:$("#message").val(),
  };

  emailjs.send('service_4r06s83','template_xdwqln8',getemailFields)
  .then(function(res){
    console.log("success",res.status);
  })
  alert("Your message was sent!");
}
