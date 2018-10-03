var html = '';
		for (var i = 0; i < products.length; i++) {
			html+='<div class="item">';
			html+='	<div class="item-content">';
			html+='	<figure>';
			html+='		<img src="'+products[i].image+'"/>';
			html+='			<figcaption>'+products[i].name+'</figcaption>';
			html+='	</figure>';
			html+='		<p class="price-box"><span class="price">'+products[i].price+'</span></p>';
			html+='	<p>Size: S - M - L - XL</p>';
			html+='			<p class="size-icons">';
			html+='				<span>&nbsp;</span>';
			html+='				<span class="color-black">&nbsp;</span>';
			html+='				<span class="color-blue">&nbsp;</span>';
			html+='				<span class="color-green">&nbsp;</span>';
			html+='			</p>';
			html+='			<p class="line"></p>';
			html+='			<div class="cart-icons">';
			html+='				<p class="size-icons">';
			html+='					<a href="#"><i class="fa fa-share" style="font-size:30px;"></i></a>';
			html+='					<a href="#"><i class="fa fa-cart-plus m-l-15" style="font-size:30px;"></i></a>';
			html+='					<a href="#"><i class="fa fa-heart-o  m-l-15" style="font-size:30px;"></i></a>';
			html+='				</p>';
			html+='			</div>';
			html+='	</div>';
			html+='</div>';
		}
document.getElementById("product-list").innerHTML = html;

