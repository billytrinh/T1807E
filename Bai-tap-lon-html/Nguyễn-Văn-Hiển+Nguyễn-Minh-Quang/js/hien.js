


function renderHtml(products)
{
	var html='';
	for (var i = 0; i < products.length; i++)
	{
		html+='<div class="item">';
		html+='		<figure class="show">';
		html+='			<img width="125px" height="175px" src="'+products[i].image+'"/>';
		html+='		<figcaption>'+products[i].name+'</figcaption>';
		html+='		</figure>';
		html+='		<div class="size-hover">';
		html+='			<p class="size-choos">';
		html+='				<span>sizes : </span>';
		html+='				<span class="item-size">s</span>';
		html+='				<span>-</span>';
		html+='				<span class="item-size">m</span>';
		html+='				<span>-</span>';
		html+='				<span class="item-size">l</span>';
		html+='				<span>-</span>';
		html+='				<span class="item-size">xl</span>';
		html+='			</p>';
		html+='			<div class="color">';
		html+='				<span><img src="images/Redcoloricon.gif" style="height: 15px; width: 15px" /></span>';
		html+='				<span><img src="images/Blackcoloricon.gif" style="height: 15px; width: 15px"/></span>';
		html+='				<span><img src="images/Bluecoloricon.gif" style="height: 15px; width: 15px"/></span>';
		html+='				<span><img src="images/Greencoloricon.gif" style="height: 15px; width: 15px"/></span>';
		html+='			</div>';
		html+='			<div class="share-cart-like">';
		html+='				<span><a href="#"><img src="images/Shareicon.gif" style="width: 22px; height: 22px"/></a></span>';
		html+='				<span><a href="#"><img src="images/Addtocarticon.gif" style="width: 22px; height: 22px"/></a></span>';
		html+='				<span><a href="#"><img src="images/Likeicon.gif" style="width: 22px; height: 22px"/></a></span>';
		html+='			</div>';
		html+='		</div>';
		html+='		<div class="price-box">'+products[i].price+'</div>';
		html+=' </div>';
	}
console.log(html);
	document.getElementById("item-list").innerHTML = html;
}
