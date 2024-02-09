$(document).ready(function (){
	
$("#validate").click(function () {
        var personName=$("#personName").val();
        var personEmail=$("#personEmail").val();
        var personAge=$("#personAge").val();
		$("#personName").css('border','1px solid #ccc');
        $("#personAge").css('border','1px solid #ccc');
        if(personFirstName==""){
            alert("Person first name is empty");
            $("#personFirstName").css('border','2px solid #ff0000');
            return;
        }
        if(personAge<0){
            alert("Person age is invalid");
            $("#personAge").css('border','2px solid #ff0000');
            return;
        }
       
    });
   
});