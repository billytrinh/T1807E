var html = '';
		for (var i = 0; i < products.length; i++) {
		html+='	<li class="item">';
        html+=' <div class="item-content">';
		html+='<figure class="show">';
        html+='<img src="'+products[i].image+'">';
        html+='<figcaption>Reebok Track Jacket</figcaption>';
        html+='</figure>';
		html+='<p class="price-box">'+products[i].price+'</p>';
		html+='<p class="size"> Size: S - M - L - XL</p>';
		html+='<p class="size-icons">';
        html+='<span class="red color">&nbsp;</span>';
        html+='<span class="black color">&nbsp;</span>';
        html+='<span class="blue color">&nbsp;</span>';
        html+='<span class="green color">&nbsp;</span>';
        html+='</p>';
		html+='<div class ="item-line"></div>';
		html+='<div class="icon-bot">';
		html+='<i class="fa fa-globe"></i>';
		html+='<i class="fa fa-cart-plus"></i>';
		html+='<i class="fa fa-heart-o"></i>';
		html+='</div>';                      
        html+='</div>';
        html+='</li>';
		}
document.getElementById("product_list").innerHTML = html;