var tenbien = new XMLHttpRequest();
tenbien.onreadystatechange = function(){
	 if (this.readyState == 4  && this.status == 200){
	 	var result = this.responseText;
    	result = JSON.parse(result);
    	var products = result.data;
    		var html ='';
    		for (var i = 0; i < products.length -1; i++) 
{		
		html+='<div class="rows">';
		html+='<div class="item">';
		html+='	<div class="row">';
		html+='		<figure class ="image">';
		html+='			<img src="'+products[i].image+'">';
		html+='			<figcaption>';
		html+='				'+products[i].name+'';
		html+='			</figcaption>';
		html+='		<figure>';
		html+='		<p class="price">'+products[i].price+'</p>';
		html+='		<p class="size"> Size : s - m - l - xl</p>';
		html+='		<p class="color">';
        html+='        	<span class="red"></span>';
        html+='          <span class="black"></span>';
        html+='            <span class="blue"></span>';
        html+='            <span class="green"></span>';
        html+='        </p>';
        html+='        <div class ="line"></div>';
        html+='        <div class="icon">';	
        html+='          <i class="fa fa-globe"></i>';
        html+='            <i class="fa fa-shopping-cart"></i>';
        html+='            <i class="fa fa-heart-o"></i>';
        html+='        </div>	';
		html+='	</div>';
		html+='</div>';
		html+='</div>';
			}
			document.getElementById("menu_list").innerHTML = html;
	 }
};
tenbien.open("GET", "http://smsentertainment.club/api/get_products", true);
tenbien.send();