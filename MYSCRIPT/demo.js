var html='';
	for (var i=0; i < products.lenght; i++){
		html +='<div class="item">';
		html +='<div class="item-content">';
		html +='	<figure>';
		html +='		<img src="'+product[i].IMAGES+'"/>;
		html +='		<figcaption>'+products[i].name+'</';
		html +='figcaption>';
		html +='	</figure>';
		html +='		<p class="price-box"><span class="price">'+products[i].price+'</';
		html +='span></p>';
		html +=' </div></div>';
	}
	document.getElementByTd("product_list").innerHTML=html;