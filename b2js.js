var html = '';
		for (var i = 0; i < products.length; i++) {
			html+= '<div class="show">';
				html+= '<div class="row">';
					html+= '<figure class="item">';
						html+= '<img src="'+products[i].image+'">';
						html+= '<figcaption>';
						html+= ''+products[i].name+'';
						html+= '</figcaption>';
					html+= '</figure>';
					html+= '<p>'+products[i].price+'</p>';
					html+= '<h3>sizes : s - m - l - xl</h3>';
					html+= '<div class="color">';
					html+= '<img src="image/Red.png">';
					html+= '<img src="image/Black.png">';
					html+= '<img src="image/Blue.png">';
					html+= '<img src="image/Green.png">';
					html+= '</div>';
					html+= '<div class="icon">';
					html+= '<img src="image/Icon1.png">';
					html+= '<img src="image/Icon2.png">';
					html+= '<img src="image/Icon3.png">';
					html+= '</div>';
				html+= '</div>';
			html+= '</div>';
		}
document.getElementById("product_list").innerHTML = html;
