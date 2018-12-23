
// var flag = true;
// if(flag){
// 	localStorage.removeItem("productsX");
// }

if(localStorage.getItem("productsX")){
	renderHtml(localStorage.getItem("productsX"));
}else{
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4  && this.status == 200) {
    	var result = this.responseText;   
    	localStorage.setItem("productsX",result); 
  		renderHtml(result);
    }
  };
  xhttp.open("GET", "http://smsentertainment.club/api/get_products", true);
  xhttp.send();
}

function renderHtml(result){
	var result = JSON.parse(result);
	var products = result.data;
	var html = '';
    for (var i = 0; i < products.length - 1; i++) {
        html+='<li class="item">';
        html+='<a href="file:///Users/macbook/T1807E/Page2.html">';
        html+='<div class="item-content">';
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
        html+='</a>';
        html+='</li>';
    }
    document.getElementById("product_list").innerHTML = html;
}
jQuery(document).ready(function(){
  jQuery('.click_me').bind('click', function(){
    jQuery('.add-menu').addClass('active')
  });
});
