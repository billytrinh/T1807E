var html = '';
		for (var i = 0; i < related_products.length; i++) {
					html += '<div class="item">';
						html+='<div class="item-content">';
						html+='		<figure>';
						html+='			<img src="'+related_products[i].image+'"/>';
						html+='			<figcaption>'+related_products[i].name+'</';
						html+='figcaption>';
						html+='</figure>';
						html+='		<p class="price-box"><span class="price">'+related_products[i].price+'</';
						html+='span></p>';
						html+='	</div></div>';
				}
document.getElementById("product-list-2").innerHTML = html; 