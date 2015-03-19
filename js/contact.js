
function jSON(site, params){
						var xmlhttp;
						var i;

						document.getElementById('spinner').style.display = "block";

						if (window.XMLHttpRequest){
						
								xmlhttp=new XMLHttpRequest();
						
						}else{
						
								 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
						
						}
								
								xmlhttp.onreadystatechange=function(){
					
					   if (xmlhttp.readyState==4 && xmlhttp.status==200){
					  
					  
						}
					}
						xmlhttp.open("POST", site, false);
						xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  
						xmlhttp.send(params);
	
						var object = JSON.parse(xmlhttp.responseText)				



						return object;


};	

function contactUAV(){
	var errors = 0;

	alert('validating')

	var firstName = document.getElementById('firstName').value
	if(firstName == "" || firstName == null || firstName == undefined){
		errors++;
		feedback += "<br /> - Please Enter Your First Name."
		document.getELementById('firstName').style.borderColor = "red";

	}

	var lastName = document.getElementById('lastName').value
	if(lastName == "" || lastName == null || lastName == undefined){
		errors++;
		feedback += "<br /> - Please Enter Your Last Name."
		document.getELementById('lastName').style.borderColor = "red";

	}

	var phone = document.getElementById('phone').value


	var email = document.getElementById('email').value
	if(email == "" || email == null || email == undefined || validateEmail(email) == false){
		errors++;
		feedback += "<br /> - Your Email address is Invalid"
		document.getELementById('email').style.borderColor = "red";

	}

	var message = document.getElementById('message').value
	if(message == "" || message == null || message == undefined){
		errors++;
		feedback += "<br /> - Your Email address is Invalid"
		document.getELementById('message').style.borderColor = "red";

	}


	if(errors == 0){

		//submit form

	}

	site = "./php/contact.php"
	params = "firstName="+firstName+"&";
	params = "lastName="+lastName+"&";
	params = "email="+email+"&";
	params = "message="+message+"&";

	json(site, params)


return true;
}


function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 