var html3='';
for (var i=0; i< products3.length; i++){
	html3+= '<div class="item-p2">';
	html3+= '<div class="item-content-p2">';
	html3+=	'<figure>';
	html3+=		'<img src="'+products3[i].image+'"/>';
	html3+=		'<figcaption>'+products3[i].name+'</figcaption>';
	html3+=	'</figure>';
	html3+=	'<p class="price-box-p2"><span class="price-p2">'+products3[i].price+'</span></p>';
	html3+='</div>';
	html3+='</div>';
}
document.getElementById("products-p3").innerHTML = html3;