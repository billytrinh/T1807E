var html = '';
function get_product_view(products)
{
	for (var i = 0; i < products.length; i++) {
		html+='<div class="item">';
		html+='	<div class="item-content">';
		html+='	<figure>';
		html+='		<img src="'+products[i].image+'"/>';
		html+='			<figcaption>'+products[i].name+'</figcaption>';
		html+='	</figure>';
		html+='		<p class="price-box"><span class="price">'+products[i].price+'</span></p>';
		html+='<div class="size">';
		html+='<span>';
		html+='size : ';
		html+='<a href="#" class="m-l-15">s</a>';
		html+='<a href="#" class="m-l-15">m</a>';
		html+='<a href="#" class="m-l-15">l</a>';
		html+='<a href="#" class="m-l-15">xl</a>';
		html+='</span>';
		html+='</div>';		
		html+='<div class="color-icons">';
		html+='		<span>';
		html+='			<a href="#"><i class="fa fa-circle icon" style="color: #e12e3f;"></i></a>';
		html+='			<a href="#"><i class="fa fa-circle icon" style="color: #34404b;"></i></a>';
		html+='			<a href="#"><i class="fa fa-circle icon" style="color: #3ab3ff;"></i></a>'; 
		html+='			<a href="#"><i class="fa fa-circle icon" style="color: #2fd967;"></i></a>';
		html+='		</span>';
		html+='</div>';
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
}



 

