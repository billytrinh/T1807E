function type_email() {
    var textInput_email = document.forms['form_register']["email"].outerHTML;
    textInput_email += '<p class = "type_hide">Email is required!</p>';
    document.forms['form_register']["email"].outerHTML = textInput_email;
}

function type_firstname() {
    var textInput_firstname = document.forms['form_register']["firstname"].outerHTML;
    textInput_firstname += '<p class = "type_hide">Firstname is required!</p>';
    document.forms['form_register']["firstname"].outerHTML = textInput_firstname;
}

function type_phone() {
    var textInput_phone = document.forms['form_register']["phone"].outerHTML;
    textInput_phone += '<p class = "type_hide">Phone is required!</p>';
    document.forms['form_register']["phone"].outerHTML = textInput_phone;
}
function type_address() {
    var textInput_address = document.forms['form_register']["address"].outerHTML;
    textInput_address += '<p class = "type_hide">Address is required!</p>';
    document.forms['form_register']["address"].outerHTML = textInput_address;
}

function type_lastname() {
    var textInput_lastname = document.forms['form_register']["lastname"].outerHTML;
    textInput_lastname += '<p class = "type_hide">Lastname is required!</p>';
    document.forms['form_register']["lastname"].outerHTML = textInput_lastname;
}

function type_username() {
    var textInput_username = document.forms['form_register']["username"].outerHTML;
    textInput_username += '<p class = "type_hide">Username is required!</p>';
    document.forms['form_register']["username"].outerHTML = textInput_username;
}

function type_password() {
    var textInput_password = document.forms['form_register']["password"].outerHTML;
    textInput_password += '<p class = "type_hide">Password is required!</p>';
    document.forms['form_register']["password"].outerHTML = textInput_password;
}

function type_password_1() {
    var textInput_password = document.forms['form_register']["password"].outerHTML;
    textInput_password += '<p class = "type_hide">Your password must be more than 8 characters long!</p>';
    document.forms['form_register']["password"].outerHTML = textInput_password;
}

function type_password2() {
    var textInput_password2 = document.forms['form_register']["password2"].outerHTML;
    textInput_password2 += '<p class = "type_hide">The password is to common!</p>';
    document.forms['form_register']["password2"].outerHTML = textInput_password2;
}

function type_password21() {
    var textInput_password21 = document.forms['form_register']["password2"].outerHTML;
    textInput_password21 += '<p class = "type_hide">You must confirm the password!</p>';
    document.forms['form_register']["password2"].outerHTML = textInput_password21;
}

function checkRegister() {
    var error = false;
    var email = document.forms["form_register"]["email"].value;
    var firstname = document.forms["form_register"].firstname.value;
    var lastname = document.forms["form_register"].lastname.value;
    var username = document.forms["form_register"].username.value;
    var address = document.forms["form_register"].address.value;
    var phone = document.forms["form_register"]["phone"].value;
    var password = document.forms["form_register"]["password"].value;
    var password2 = document.forms["form_register"]["password2"].value;

    if (firstname.length <= 0) {
        error = true;
        if (document.forms["form_register"]['firstname'].nextElementSibling) {
            document.forms["form_register"]['firstname'].nextElementSibling.remove();
        }
        type_firstname();
    } else {
        if (document.forms["form_register"]['firstname'].nextElementSibling) {
            document.forms["form_register"]['firstname'].nextElementSibling.remove();
        }
    }
    if (lastname.length <= 0) {
        error = true;
        if (document.forms["form_register"]['lastname'].nextElementSibling) {
            document.forms["form_register"]['lastname'].nextElementSibling.remove();
        }
        type_lastname();
    } else {
        if (document.forms["form_register"]['lastname'].nextElementSibling) {
            document.forms["form_register"]['lastname'].nextElementSibling.remove();
        }
    }
    if (username.length <= 0) {
        error = true;
        if (document.forms["form_register"]['username'].nextElementSibling) {
            document.forms["form_register"]['username'].nextElementSibling.remove();
        }
        type_username();
    } else {
        if (document.forms["form_register"]['username'].nextElementSibling) {
            document.forms["form_register"]['username'].nextElementSibling.remove();
        }
    }
    if (address.length <= 0) {
        error = true;
        if (document.forms["form_register"]['address'].nextElementSibling) {
            document.forms["form_register"]['address'].nextElementSibling.remove();
        }
        type_address();
    } else {
        if (document.forms["form_register"]['address'].nextElementSibling) {
            document.forms["form_register"]['address'].nextElementSibling.remove();
        }
    }

    if (phone.length <= 0) {
        error = true;
        if (document.forms["form_register"]['phone'].nextElementSibling) {
            document.forms["form_register"]['phone'].nextElementSibling.remove();
        }
        type_phone();
    } else {
        if (document.forms["form_register"]['phone'].nextElementSibling) {
            document.forms["form_register"]['phone'].nextElementSibling.remove();
        }
    }
    if (password.length > 0 && password.length < 6) {
        error = true;
        if (document.forms["form_register"]['password'].nextElementSibling) {
            document.forms["form_register"]['password'].nextElementSibling.remove();
        }
        type_password_1();
    }
    if (password.length >= 6) {
        if (document.forms["form_register"]['password'].nextElementSibling) {
            document.forms["form_register"]['password'].nextElementSibling.remove();
        }
    }
    if (password.length <= 0) {
        error = true;
        if (document.forms["form_register"]['password'].nextElementSibling) {
            document.forms["form_register"]['password'].nextElementSibling.remove();
        }
        type_password();
    }

    if (password2.length <= 0 && password.length >= 6) {
        error = true;
        if (document.forms["form_register"]['password2'].nextElementSibling) {
            document.forms["form_register"]['password2'].nextElementSibling.remove();
        }
        type_password21();
    } else {
        if (document.forms["form_register"]['password2'].nextElementSibling) {
            document.forms["form_register"]['password2'].nextElementSibling.remove();
        }
    }
    if (password2 != password && password2.length > 0) {
        error = true;
        if (document.forms["form_register"]['password2'].nextElementSibling) {
            document.forms["form_register"]['password2'].nextElementSibling.remove();
        }
        type_password2();
    }

    if (email.length <= 0) {
        error = true;
        if (document.forms["form_register"]['email'].nextElementSibling) {
            document.forms["form_register"]['email'].nextElementSibling.remove();
        }
        type_email();
    } else {
        if (document.forms["form_register"]['email'].nextElementSibling) {
            document.forms["form_register"]['email'].nextElementSibling.remove();
        }
    }
    // if (check == false) {
    //     error = true;
    // }
    if (error) {
        return false;
    } else {
        return true;
    }
}