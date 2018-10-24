function products_list(products)
{
	var html='';
	for (var i = 0; i < products.length; i++)
	{
		html+='<div class="item">';
		html+='		<figure class="show">';
		html+='			<img width="125px" height="175px" src="'+products[i].image+'"/>';
		html+='			<figcaption>'+products[i].name+'</figcaption>';
		html+='		</figure>';
		html+='		<div class="size-hover">';
		html+='			<p class="size-choos">';
		html+='				<span>sizes : </span>';
		html+='				<span class="item-size">s</span>';
		html+='				<span>-</span>';
		html+='				<span class="item-size">m</span>';
		html+='				<span>-</span>';
		html+='				<span class="item-size">l</span>';
		html+='				<span>-</span>';
		html+='				<span class="item-size">xl</span>';
		html+='			</p>';
		html+='			<div class="color">';
		html+='				<span class="red-color">&nbsp</span>';
		html+='				<span class="black-color">&nbsp</span>';
		html+='				<span class="blue-color">&nbsp</span>';
		html+='				<span class="green-color">&nbsp</span>';
		html+='			</div>';
		html+='			<div class="share-cart-like">';
		html+='				<span class="click2"><a href="#"><img src="images/Shareicon.gif" style="width: 22px; height: 22px" target="_blank"/></a></span>';
		html+='				<span class="click2"><a href="#"><img src="images/Addtocarticon.gif" style="width: 22px; height: 22px" target="_blank"/></a></span>';
		html+='				<span class="click2"><a href="#"><img src="images/Likeicon.gif" style="width: 22px; height: 22px" target="_blank"/></a></span>';
		html+='			</div>';
		html+='		</div>';
		html+='		<div class="price-box">'+products[i].price+'</div>';
		html+=' </div>';
	}
console.log(html);
	document.getElementById("item-list").innerHTML = html;
}


function check_form()
{
	//var email = document.forms["form_data"].email.value;
		//if (email ) {}

	var dienten = document.forms["form_data"].dienten.value;
	var sodienthoai = document.forms["form_data"].sodienthoai.value;
	var matkhau = document.forms["form_data"].matkhau.value;
	var nhaplaimatkhau = document.forms["form_data"].nhaplaimatkhau.value;
	if (dienten != "" && sodienthoai == "1;2;3;4;5;6;7;8;9;0" && matkhau.length >= 6 && matkhau == nhaplaimatkhau) {
		return true;
	}else{
		if (dienten == "") {
			var textInput = document.forms["form_data"].dienten.outerHTML;
				textInput += '<p style="color: red; font-size: 15px">Chưa đủ 6 ký tự</p>';
				document.forms["form_data"].dienten.outerHTML = textInput;
		}
			if (dienten.length > 0) {
				if (document.forms["form_data"].dienten.nextElementSibling) {
					document.forms["form_data"].dienten.nextElementSibling.remove();
				}
				
			}
	
		if (sodienthoai != "1;2;3;4;5;6;7;8;9;0") {
			document.forms["form_data"].sodienthoai.nextElementSibling.style.display = "block";
		}

	
		if (matkhau.length < 6) {
			document.forms["form_data"].matkhau.nextElementSibling.style.display = "block";	
		}
	
	
		if (matkhau != nhaplaimatkhau) {
				document.forms["form_data"].nhaplaimatkhau.nextElementSibling.style.display= "block";
			}
		}
		return false;
	}

