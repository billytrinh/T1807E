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
		for (var i = 0; i < products.length; i++) {
			html += '<div class="canh">';
				html+='<figure class="show">';
				html+='		<img src="'+products[i].image+'"/>';
				html+='		<figcaption>'+products[i].name+'</';
				html+='		figcaption>';
				html+='</figure>';
				html+='<p class="money">'+products[i].price+'</p>';
			html+='	</div>';
		}
		document.getElementById("product_list").innerHTML = html;
}

	// var result = JSON.parse(this.responseText);
 //    	console.log(result);
 //    	var products = result.data;
