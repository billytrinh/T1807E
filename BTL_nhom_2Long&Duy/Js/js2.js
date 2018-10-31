var html = '';
		for (var i = 0; i < products2.length; i++) 
		{
				html+='<div class="item">';
				html+='		<div class="item-content">';
				html+='			<figure class="show">';
				html+='				<img src="'+products2[i].image+'"/>';
				html+='				<figcaption>'+products2[i].name+'</figcaption>';
				html+='			</figure>';
				html+='			<p class="price-box"><span class="price"> '+products2[i].price+' </span></p>';
				html+='			<figure class="show-hover">'
				html+='				<p>Size: S - M - L - XL</p>'
				html+='				<div class="color-icons">'
				html+='					<p class="icons">'
				html+='						<span class="icon1">&nbsp;</span>'
				html+='						<span class="icon2">&nbsp;</span>'
				html+='						<span class="icon3">&nbsp;</span>'
				html+='						<span class="icon4">&nbsp;</span>'
				html+='					</p>'				
				html+='				</div>'
				html+='				<div class="symbol">'
				html+='					<img src="../images/global.gif"/>'
				html+='					<img src="../images/roller.gif"/>'
				html+='					<img src="../images/love.gif"/>'
				html+='				</div>'
				html+='			</figure>'
				html+='		</div>'
				html+='	</div>'
		}
document.getElementById("product_list_2").innerHTML = html;