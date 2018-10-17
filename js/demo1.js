var html = '';
		for (var i = 0; i < products.length; i++) {
			html+='<div class="item">';
				html+='<div class="item-content1">';
					html+='<figure class="images">';
						html+='<img class = "ao" src="'+products[i].image+'"/>';
						html+='<figcaption>'+products[i].name+'</figcaption>';
					html+='</figure>';
					html+='<div class="price-box">';
						html+='<div class="price">'+products[i].price+'</div>';
					html+='</div>';
					html+='<div class="item-content2">';
										
						html+='<div>';
							html+='<a href="#"><img class="color-icon" src="'+products[i].red_color+'"/></a>';
							html+='<a href="#"><img class="color-icon" src="'+products[i].black_color+'"/></a>';
							html+='<a href="#"><img class="color-icon" src="'+products[i].blue_color+'"/></a>';
							html+='<a href="#"><img class="color-icon" src="'+products[i].green_color+'"/></a>';
						html+='</div>';					
						html+='<div >';
							html+='<a href="#"><img class="icon" src="'+products[i].world_icon+'"/></a>';
							html+='<a href="#"><img class="icon" src="'+products[i].buy_icon+'"/></a>';
							html+='<a href="#"><img class="icon" src="'+products[i].love_icon+'"/></a>';
						html+='</div>';
					html+='</div>';
				html+='</div>';
			html+='</div>';
		}
document.getElementById("product_list").innerHTML = html;