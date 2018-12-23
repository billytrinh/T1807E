$(document).ready(function () {
    $(function () {
        new WOW().init();
    });
    //   $(function() {
    //     TweenMax.staggerFrom($('.tinto'),0.5,{top:100,opacity:0},0.1)
    // });
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    $('#sidebarCollapse').on('click', function () {
        $('.register').toggleClass('col-sm-9');
    });
    $('#sidebarCollapse').on('click', function () {
        window.setTimeout(function () {
            $('.session').toggleClass('col-sm-12').toggleClass('active-content').attr("right", "0");
        });

    });
 //menu
 jQuery(".ic").bind("mouseenter",function(){          //
    jQuery(this).children("div").slideDown();     //DS con khi hover
});
jQuery(".ic").bind("mouseleave",function(){    
    jQuery(this).children("div").hide()     
});

$('#confirm-delete').on('show.bs.modal', function(e) {
    $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
});
    //slider
    $('.nutan .next').click(function (e) {
        $('.sangphai').removeClass('sangphai');
        $('.owl-wrapper').addClass('sangtrai');
    });

    $('.nutan .prev').click(function (e) {
        $('.sangtrai').removeClass('sangtrai');
        $('.owl-wrapper').addClass('sangphai');
    });
    //endslider
    jQuery(window).on('scroll', function (event) {
        // console.log('vi tri');
        // console.log(jQuery('html, body').scrollTop());
        var vitri = jQuery('html, body').scrollTop();
        if (vitri >= 105) {
            jQuery('.nav').addClass('add-menu');
        } else {
            jQuery('.nav').removeClass('add-menu');
        }
    });

    //register
  
    

    var today = new Date();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();
    var selectYear = document.getElementById("year");
    var selectMonth = document.getElementById("month");

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var monthAndYear = document.getElementById("monthAndYear");
    showCalendar(currentMonth, currentYear);


    function next() {
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        showCalendar(currentMonth, currentYear);
    }

    function previous() {
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        showCalendar(currentMonth, currentYear);
    }

    function jump() {
        currentYear = parseInt(selectYear.value);
        currentMonth = parseInt(selectMonth.value);
        showCalendar(currentMonth, currentYear);
    }

    function showCalendar(month, year) {

        var firstDay = (new Date(year, month)).getDay();
        var daysInMonth = 32 - new Date(year, month, 32).getDate();

        var tbl = document.getElementById("calendar-body"); // body of the calendar

        // clearing all previous cells
        tbl.innerHTML = "";

        // filing data about month and in the page via DOM.
        monthAndYear.innerHTML = months[month] + " " + year;
        selectYear.value = year;
        selectMonth.value = month;

        // creating all cells
        var date = 1;
        for (var i = 0; i < 6; i++) {
            // creates a table row
            var row = document.createElement("tr");

            //creating individual cells, filing them up with data.
            for (var j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode(date);
                    if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                        cell.classList.add("bg-info");
                    } // color today's date
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    date++;
                }


            }

            tbl.appendChild(row); // appending each row into calendar body.
        }

    }

    function show_menu() {
        document.getElementById('hidden_menu').style.display = 'block';
    }

    function hide_menu() {
        document.getElementById('hidden_menu').style.display = 'none';
    }

    function type_email() {
        var textInput_email = document.forms['form_register']["email"].outerHTML;
        textInput_email += '<p class = "type_hide">Xin hãy nhập Email!</p>';
        document.forms['form_register']["email"].outerHTML = textInput_email;
    }

    function type_fullname() {
        var textInput_fullname = document.forms['form_register']["fullname"].outerHTML;
        textInput_fullname += '<p class = "type_hide">Xin hãy nhập họ và tên!</p>';
        document.forms['form_register']["fullname"].outerHTML = textInput_fullname;
    }

    function type_phone() {
        var textInput_phone = document.forms['form_register']["phone"].outerHTML;
        textInput_phone += '<p class = "type_hide">Xin hãy nhập số điện thoại!</p>';
        document.forms['form_register']["phone"].outerHTML = textInput_phone;
    }

    function type_password() {
        var textInput_password = document.forms['form_register']["password"].outerHTML;
        textInput_password += '<p class = "type_hide">Xin hãy nhập password!</p>';
        document.forms['form_register']["password"].outerHTML = textInput_password;
    }

    function type_password_1() {
        var textInput_password = document.forms['form_register']["password"].outerHTML;
        textInput_password += '<p class = "type_hide">Password phải có trên 6 ký tự!</p>';
        document.forms['form_register']["password"].outerHTML = textInput_password;
    }

    function type_password2() {
        var textInput_password2 = document.forms['form_register']["password2"].outerHTML;
        textInput_password2 += '<p class = "type_hide">Mật khẩu không khớp, xin hãy nhập lại!</p>';
        document.forms['form_register']["password2"].outerHTML = textInput_password2;
    }

    function type_password21() {
        var textInput_password21 = document.forms['form_register']["password2"].outerHTML;
        textInput_password21 += '<p class = "type_hide">Phải xác nhận mật khẩu!</p>';
        document.forms['form_register']["password2"].outerHTML = textInput_password21;
    }

    function type_agree() {
        var textInput_agree = document.forms['form_register']["agree"].outerHTML;
        textInput_agree += '<p class = "type_hide">Agree!</p>';
        document.forms['form_register']["agree"].outerHTML = textInput_agree;
    }

    function checkRegister() {
        var error = false;
        var email = document.forms["form_register"]["email"].value;
        var fullname = document.forms["form_register"].fullname.value;
        var phone = document.forms["form_register"]["phone"].value;
        var password = document.forms["form_register"]["password"].value;
        var passwordagain = document.forms["form_register"]["password2"].value;
        var check = document.forms['form_register']['agree'].checked;

        if (fullname.length <= 0) {
            error = true;
            if (document.forms["form_register"]['fullname'].nextElementSibling) {
                document.forms["form_register"]['fullname'].nextElementSibling.remove();
            }
            type_fullname();
        } else {
            if (document.forms["form_register"]['fullname'].nextElementSibling) {
                document.forms["form_register"]['fullname'].nextElementSibling.remove();
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

        if (passwordagain.length <= 0 && password.length >= 6) {
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
        if (passwordagain != password && passwordagain.length > 0) {
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
        if (check == false) {
            error = true;
        }
        if (error) {
            return false;
        } else {
            return true;
        }
    }

});