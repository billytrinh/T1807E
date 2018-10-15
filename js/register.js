function checkForm() {
	// var email = document.getElementById("email").value;
	// var password = document.getElementById("password").value;
	var email = document.forms["form_data"].email.value;
	var password = document.forms["form_data"].password.value;
	if(email.length >0 && password.length >= 6){
		return true;
	}else{
		if(email.length <=0){
			document.forms["form_data"].email.nextElementSibling.style.display = "block";
		}	
		if(password.length < 6 && password.length > 0){
			// document.forms["form_data"].password.nextElementSibling.innerText = "chưa đủ 6 ký tự";
			// document.forms["form_data"].password.nextElementSibling.style.display = "block";
			if(document.forms["form_data"].password.nextElementSibling){
				document.forms["form_data"].password.nextElementSibling.remove();
			}
			var textInput = document.forms["form_data"].password.outerHTML;
			textInput += '<p style="color:red">chưa đủ 6 ký tự </p>';
			document.forms["form_data"].password.outerHTML = textInput;
		}else{
			// document.forms["form_data"].password.nextElementSibling.innerText = "chưa nhap password";
			// document.forms["form_data"].password.nextElementSibling.style.display = "block";
			if(document.forms["form_data"].password.nextElementSibling){
				document.forms["form_data"].password.nextElementSibling.remove();
			}
			
			var textInput = document.forms["form_data"].password.outerHTML;
			textInput += '<p style="color:red">chưa nhap password</p>';
			document.forms["form_data"].password.outerHTML = textInput;
		}
	}
	
	return false;	
}