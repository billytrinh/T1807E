var html = '';
		for (var i = 0; i < products.length; i++) {
			html+= '<div class="item">';
			html+='<figure>';
			html+='<img src="'+products[i].image+'"/>';
			html+='<figcaption>'+products[i].name+'</';
			html+='figcaption>';
			html+='</figure>';
			html+='<div class="price">'+products[i].price+'</';
			html+='div>';
			html+='</div></div>';
		}
document.getElementById("product_list").innerHTML = html;
