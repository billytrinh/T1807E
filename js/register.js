function show_menu(){
    document.getElementById('hidden_menu').style.display = 'block';
}
function hide_menu(){
  document.getElementById('hidden_menu').style.display = 'none';
}
function type_email() {
    var textInput_email = document.forms['form_register']["email"].outerHTML;
    textInput_email+='<p class = "type_hide">Xin hãy nhập Email!</p>';
    document.forms['form_register']["email"].outerHTML = textInput_email;
}
function type_fullname() {
    var textInput_fullname = document.forms['form_register']["fullname"].outerHTML;
    textInput_fullname+='<p class = "type_hide">Xin hãy nhập họ và tên!</p>';
    document.forms['form_register']["fullname"].outerHTML = textInput_fullname;
}
function type_phone() {
    var textInput_phone = document.forms['form_register']["phone"].outerHTML;
    textInput_phone+='<p class = "type_hide">Xin hãy nhập số điện thoại!</p>';
    document.forms['form_register']["phone"].outerHTML = textInput_phone;
}
function type_password() {
    var textInput_password = document.forms['form_register']["password"].outerHTML;
    textInput_password+='<p class = "type_hide">Xin hãy nhập password!</p>';
    document.forms['form_register']["password"].outerHTML = textInput_password;
}
function type_password_1() {
    var textInput_password = document.forms['form_register']["password"].outerHTML;
    textInput_password+='<p class = "type_hide">Password phải có trên 6 ký tự!</p>';
    document.forms['form_register']["password"].outerHTML = textInput_password;
}
function type_password_again() {
    var textInput_password_again = document.forms['form_register']["password_again"].outerHTML;
    textInput_password_again+='<p class = "type_hide">Mật khẩu không khớp, xin hãy nhập lại!</p>';
    document.forms['form_register']["password_again"].outerHTML = textInput_password_again;
}
function type_password_again1() {
    var textInput_password_again1 = document.forms['form_register']["password_again"].outerHTML;
    textInput_password_again1+='<p class = "type_hide">Phải xác nhận mật khẩu!</p>';
    document.forms['form_register']["password_again"].outerHTML = textInput_password_again1;
}
function type_agree() {
    var textInput_agree = document.forms['form_register']["agree"].outerHTML;
    textInput_agree+='<p class = "type_hide">Agree!</p>';
    document.forms['form_register']["agree"].outerHTML = textInput_agree;
}
function checkRegister(){
var error = false;
var email = document.forms["form_register"]["email"].value;
var fullname = document.forms["form_register"].fullname.value;
var phone = document.forms["form_register"]["phone"].value;
var password = document.forms["form_register"]["password"].value;
var passwordagain = document.forms["form_register"]["password_again"].value;
var check = document.forms['form_register']['agree'].checked;

if(fullname.length <= 0){
    error = true;
    if(document.forms["form_register"]['fullname'].nextElementSibling){
        document.forms["form_register"]['fullname'].nextElementSibling.remove();
    }
        type_fullname(); 
    }else{
        if(document.forms["form_register"]['fullname'].nextElementSibling){
            document.forms["form_register"]['fullname'].nextElementSibling.remove();
        }
    }

if(phone.length <= 0){
    error = true;
    if(document.forms["form_register"]['phone'].nextElementSibling){
        document.forms["form_register"]['phone'].nextElementSibling.remove();
    }
    type_phone();
}
else{
    if(document.forms["form_register"]['phone'].nextElementSibling){
        document.forms["form_register"]['phone'].nextElementSibling.remove();
    }
}
if(password.length > 0 && password.length <6){
    error = true;
    if(document.forms["form_register"]['password'].nextElementSibling){
        document.forms["form_register"]['password'].nextElementSibling.remove();
    }
    type_password_1();
    }
if(password.length>=6){
    if(document.forms["form_register"]['password'].nextElementSibling){
        document.forms["form_register"]['password'].nextElementSibling.remove();
    }
}
if(password.length<=0){
    error = true;
    if(document.forms["form_register"]['password'].nextElementSibling){
    document.forms["form_register"]['password'].nextElementSibling.remove();
    }
    type_password();
}

if(passwordagain.length <= 0 && password.length>=6){
    error = true;
    if(document.forms["form_register"]['password_again'].nextElementSibling){
        document.forms["form_register"]['password_again'].nextElementSibling.remove();
    }
    type_password_again1();
    }
    else{
        if(document.forms["form_register"]['password_again'].nextElementSibling){
            document.forms["form_register"]['password_again'].nextElementSibling.remove();
        }
    }
if(passwordagain != password && passwordagain.length > 0){
    error = true;
    if(document.forms["form_register"]['password_again'].nextElementSibling){
        document.forms["form_register"]['password_again'].nextElementSibling.remove();
    }
    type_password_again();
    }
    
if(email.length <= 0){
    error = true;
    if(document.forms["form_register"]['email'].nextElementSibling){
        document.forms["form_register"]['email'].nextElementSibling.remove();
    }
    type_email(); 
}
else{
    if(document.forms["form_register"]['email'].nextElementSibling){
        document.forms["form_register"]['email'].nextElementSibling.remove();
    }
}
if(check == false){
    error = true;
}
if(error){
    return false;
}else{
    return true;
}
}
