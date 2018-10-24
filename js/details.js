var html = '';
	for (var i = 0; i < products_Related.length; i++) {
		html+='<div class="item width_p4 m-b-0">';
			html+='<div class="item-content">';
				html+='<figure class="show">';
					html+='<img class="imgsrc" src="'+products_Related[i].image+'"/>';
					html+='<figcaption>'+products_Related[i].name+'</figcaption>';
				html+='</figure>';
				html+='<p class="price-box">';
					html+='<span class="price">'+products_Related[i].price+'</span>';
				html+='</p>';
				html+='<p class="sizes-icon">'+products_Related[i].size+'</p>';
				html+='<div>';
					html+='<a href="#"><img class="color-icon" src="'+products_Related[i].img_red+'"/></a>';
					html+='<a href="#"><img class="color-icon" src="'+products_Related[i].img_black+'"/></a>';
					html+='<a href="#"><img class="color-icon" src="'+products_Related[i].img_blue+'"/></a>';
					html+='<a href="#"><img class="color-icon" src="'+products_Related[i].img_green+'"/></a>';
				html+='</div>';
				html+='<div >';
					html+='<a href="#"><img class="icon" src="'+products_Related[i].icon_share+'"/></a>';
					html+='<a href="#"><img class="icon" src="'+products_Related[i].icon_cart+'"/></a>';
					html+='<a href="#"><img class="icon" src="'+products_Related[i].icon_favorite+'"/></a>';
				html+='</div>';
			html+='</div>';
		html+='</div>';
	}
document.getElementById("product_list_related").innerHTML = html;
