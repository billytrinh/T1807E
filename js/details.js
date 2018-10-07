var html = '';
	for (var i = 0; i < products_Related.length; i++) {
		html+='<div class="item4">';
			html+='<div class="item-content">';
				html+='<figure >';
					html+='<img src="'+products_Related[i].image+'"/>';
					html+='<figcaption>'+products_Related[i].name+'</figcaption>';
				html+='</figure>';
				html+='<p>';
					html+='<span class="price">'+products_Related[i].price+'</span>';
				html+='</p>';
			html+='</div>';
		html+='</div>';
	}
document.getElementById("product_list_related").innerHTML = html;