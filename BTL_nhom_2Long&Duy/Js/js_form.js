function checkForm() {
	var email = document.forms["form-group"].email.value;
	var name = document.forms["form-group"].name.value;
	var phone = document.forms["form-group"].phone.value;
	var password = document.forms["form-group"].password.value;
	var passwordre = document.forms["form-group"].password.value;
	var code = document.forms["form-group"].code.value;
	var accept = document.getElementById("checkboxreg");

	var ErrorNotification = '';
	ErrorNotification+='<p><b>Đăng ký không hợp lệ:</b></p>';
	ErrorNotification+='<ul class="error-list">'
	if ((email.length > 10 && password.length >= 6) && password == passwordre)
	{
		document.getElementById("form-error").innerHTML = '<p style="color:green;">Đã đăng ký thành công!</p>';
		return true;
	}
	else
	{
		if (email.length <=0)
		{
			ErrorNotification += '<li>Bạn chưa nhập email</li>';
		}
		if ((email.length > 0) && (email.length < 10))
		{
			ErrorNotification += '<li>Email dưới 10 ký tự</li>';
		}
		if (name.length <= 0)
		{
			ErrorNotification += '<li>Bạn chưa nhập Họ và Tên</li>';
		}
		if (phone.length <= 0)
		{
			ErrorNotification += '<li>Bạn chưa nhập Số điện thoại</li>';
		}
		if (password.length <= 0)
		{
			ErrorNotification += '<li>Bạn chưa nhập mật khẩu</li>';
		}
		if (password.length < 6 && password.length > 0)
		{
			ErrorNotification += '<li>Mật khẩu dưới 6 ký tự</li>';
		}
		if (password != passwordre)
		{
			ErrorNotification += '<li>Mật khẩu nhập lại chưa khớp</li>';
		}
		if (accept.checked == false)
		{
			ErrorNotification += '<li>Chưa đồng ý về chính sách bảo mật và điều khoản sử dụng</li>';
		}
		ErrorNotification+='</ul>'
		document.getElementById("form-error").innerHTML = ErrorNotification;
	}
	
	return false;	
}