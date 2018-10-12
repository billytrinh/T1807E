var html='';
for (var i=0; i< products.length; i++){
	html+= '<div class="item-p2">';
	html+= '<div class="item-content-p2">';
	html+=	'<figure>';
	html+=		'<img src="'+products[i].image+'"/>';
	html+=		'<figcaption>'+products[i].name+'</figcaption>';
	html+=	'</figure>';
	html+=	'<p class="price-box-p2"><span class="price-p2">'+products[i].price+'</span></p>';
	html+='</div>';
	html+='</div>';
}
document.getElementById("extra-products-p2").innerHTML = html;