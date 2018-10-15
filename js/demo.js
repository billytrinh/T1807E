var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    console.log(this.readyState);
  if (this.readyState == 4  && this.status == 200) {
      var result = this.responseText;
      result = JSON.parse(result);
      var products = result.data;
        var html = '';
        for (var i = 0; i < (products.length - 1); i++) {
            html+='<div class="item">';
            html+='	<div class="item-content">';
            html+='	<figure>';
            html+='		<img width=80% height=auto src="'+products[i].image+'"/>';
            html+='			<figcaption>'+products[i].name+'</figcaption>';
            html+='	</figure>';
            html+='		<p class="price-box"><span class="price">'+products[i].price+'</span></p>';
            html+='<div class="size">';
            html+='<span>';
            html+='size : ';
            html+='<a href="#" class="m-l-15" style="font-weight: 600;">s</a>';
            html+='<a href="#" class="m-l-15" style="font-weight: 600;">m</a>';
            html+='<a href="#" class="m-l-15" style="font-weight: 600;">l</a>';
            html+='<a href="#" class="m-l-15" style="font-weight: 600;">xl</a>';
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
};
xhttp.open("GET", "http://smsentertainment.club/api/get_products", true);
xhttp.send();