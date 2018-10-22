function checkForm() {
	var email = document.forms["form_data"].email.value;
	var hovaten = document.forms["form_data"].hovaten.value;
	var sodienthoai = document.forms["form_data"].sodienthoai.value;
	var matkhau = document.forms["form_data"].matkhau.value;
	var nhaplaimatkhau = document.forms["form_data"].nhaplaimatkhau.value;
	var magioithieu = document.forms["form_data"].magioithieu.value;
	var flag = 0;
		if(email.length <=0)
		{
			if (document.forms["form_data"].email.nextElementSibling)
			{
				document.forms["form_data"].email.nextElementSibling.remove();
			}
			
			textemail();
			flag++;
		}
		else
		{
			if (document.forms["form_data"].email.nextElementSibling) 
			{
				document.forms["form_data"].email.nextElementSibling.remove();
			}
		}
		if(hovaten.length <=0)
		{
			if (document.forms["form_data"].hovaten.nextElementSibling)
			{
				document.forms["form_data"].hovaten.nextElementSibling.remove();
			}
			texthovaten();
			flag++;
		}
		else
		{
			if (document.forms["form_data"].hovaten.nextElementSibling) 
			{
				document.forms["form_data"].hovaten.nextElementSibling.remove();
			}
		}
		if(sodienthoai.length <=0)
		{ 	
			if (document.forms["form_data"].sodienthoai.nextElementSibling)
			{
				document.forms["form_data"].sodienthoai.nextElementSibling.remove();
			}
			textsodienthoai();
			flag++;
		}
		else
		{
			if (document.forms["form_data"].sodienthoai.nextElementSibling) 
			{
				document.forms["form_data"].sodienthoai.nextElementSibling.remove();
			}
		}
		if(matkhau.length < 6 && matkhau.length >0)
		{
			if(document.forms["form_data"].matkhau.nextElementSibling)
			{
				document.forms["form_data"].matkhau.nextElementSibling.remove();
			}
			textmatkhau1();
			flag++;
		}
		if(matkhau.length<= 0){
			if(document.forms["form_data"].matkhau.nextElementSibling)
			{
				document.forms["form_data"].matkhau.nextElementSibling.remove();
			}
			textmatkhau2();
			flag++;
		}
		if (matkhau.length>=6) {
			if(document.forms["form_data"].matkhau.nextElementSibling)
			{
				document.forms["form_data"].matkhau.nextElementSibling.remove();
			}
		}
		if(matkhau != nhaplaimatkhau && nhaplaimatkhau.length >0)
		{
			if(document.forms["form_data"].nhaplaimatkhau.nextElementSibling)
			{
				document.forms["form_data"].nhaplaimatkhau.nextElementSibling.remove();
			}
		
		 textmatkhau3();
		 flag++;
		}
		else
		{
			if(document.forms["form_data"].nhaplaimatkhau.nextElementSibling)
			{
				document.forms["form_data"].nhaplaimatkhau.nextElementSibling.remove();
			}
		}
		if(matkhau != nhaplaimatkhau && nhaplaimatkhau.length <=0)
		{	
		 flag++;
		}
		if (flag<=0) {
			return true;
		}else{
			return false;
		}
	}

function textemail() 
	{
		var textemail = document.forms["form_data"].email.outerHTML;
		textemail += '<p style="color:red"> Nhập Email </p>';
		document.forms["form_data"].email.outerHTML=textemail;
	}
function texthovaten() 
	{
		var texthovaten = document.forms["form_data"].hovaten.outerHTML;
		texthovaten += '<p style="color:red"> Nhập họ và tên </p>';
		document.forms["form_data"].hovaten.outerHTML=texthovaten;
	}
function textsodienthoai() 
	{
		var textsodienthoai = document.forms["form_data"].sodienthoai.outerHTML;
		textsodienthoai += '<p style="color:red"> Nhập số điện thoại </p>';
		document.forms["form_data"].sodienthoai.outerHTML=textsodienthoai;
	}
function textmatkhau1() 
	{
		var textmatkhau1 = document.forms["form_data"].matkhau.outerHTML;
		textmatkhau1 += '<p style="color:red">Chưa đủ 6 kí tự </p>';
		document.forms["form_data"].matkhau.outerHTML=textmatkhau1;
	}
function textmatkhau2() 
	{
		var textmatkhau2 = document.forms["form_data"].matkhau.outerHTML;
		textmatkhau2 += '<p style="color:red"> Nhập mật khẩu  </p>';
		document.forms["form_data"].matkhau.outerHTML=textmatkhau2;
	}
function textmatkhau3() 
	{
		var textmatkhau3 = document.forms["form_data"].nhaplaimatkhau.outerHTML;
		textmatkhau3 += '<p style="color:red"> Không đúng xin nhập lại  </p>';
		document.forms["form_data"].nhaplaimatkhau.outerHTML=textmatkhau3;
	}
	