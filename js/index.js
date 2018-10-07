var html = '';
	for (var i = 0; i < products.length; i++) {
		html+='<div class="item">';
			html+='<div class="item-content">';
				html+='<figure class="show">';
					html+='<img class="imgsrc" src="'+products[i].image+'"/>';
					html+='<figcaption>'+products[i].name+'</figcaption>';
				html+='</figure>';
				html+='<p class="price-box">';
					html+='<span class="price">'+products[i].price+'</span>';
				html+='</p>';
				html+='<p class="sizes-icon">'+products[i].size+'</p>';
				html+='<div>';
					html+='<a href="#"><img class="color-icon" src="'+products[i].img_red+'"/></a>';
					html+='<a href="#"><img class="color-icon" src="'+products[i].img_black+'"/></a>';
					html+='<a href="#"><img class="color-icon" src="'+products[i].img_blue+'"/></a>';
					html+='<a href="#"><img class="color-icon" src="'+products[i].img_green+'"/></a>';
				html+='</div>';
				html+='<div >';
					html+='<a href="#"><img class="icon" src="'+products[i].icon_share+'"/></a>';
					html+='<a href="#"><img class="icon" src="'+products[i].icon_cart+'"/></a>';
					html+='<a href="#"><img class="icon" src="'+products[i].icon_favorite+'"/></a>';
				html+='</div>';
			html+='</div>';
		html+='</div>';
	}
document.getElementById("product_list").innerHTML = html;

