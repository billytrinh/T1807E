var tenbien = new XMLHttpRequest();
tenbien.onreadystatechange = function(){
	 if (this.readyState == 4  && this.status == 200){
	 	var result = this.responseText;
    	result = JSON.parse(result);
    	var products = result.data;
    		var html = '';
		    for (var i = 0; i < products.length-1; i++) {
			html+= '<div class="show">';
				html+= '<div class="row">';
					html+= '<figure class="item">';
						html+= '<img src="'+products[i].image+'">';
						html+= '<figcaption>';
						html+= ''+products[i].name+'';
						html+= '</figcaption>';
					html+= '</figure>';
					html+= '<p>'+products[i].price+'</p>';
					html+= '<h3>sizes : s - m - l - xl</h3>';
					html+= '<div class="color">';
					html+= '<img src="image/Red.png">';
					html+= '<img src="image/Black.png">';
					html+= '<img src="image/Blue.png">';
					html+= '<img src="image/Green.png">';
					html+= '</div>';
					html+= '<div class="icon">';
					html+= '<img src="image/Icon1.png">';
					html+= '<img src="image/Icon2.png">';
					html+= '<img src="image/Icon3.png">';
					html+= '</div>';
				html+= '</div>';
			html+= '</div>';
		}
        document.getElementById("product_list").innerHTML = html;
	}
};
tenbien.open("GET", "http://smsentertainment.club/api/get_products", true);
tenbien.send();