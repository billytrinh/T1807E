var html='';
for (var i=0; i< products.length; i++){
	html+= '<div class="col-lg-4">';
	html+= '<div class="item-content">';
	html+=	'<figure>';
	html+=		'<img src="'+products[i].image+'"/>';
	html+=		'<figcaption>'+products[i].name+'</figcaption>';
	html+=	'</figure>';
	html+=	'<p class="price-box"><span class="price">'+products[i].price+'</span></p>';
	html+='</div>';
	html+='</div>';
}
document.getElementById("product_list").innerHTML = html;