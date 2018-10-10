 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  	console.log(this.readyState);
    if (this.readyState == 4  && this.status == 200) {
    	var result = this.responseText;
    	result = JSON.parse(result);
    	var products = result.data;
  		var html = '';
		for (var i = 0; i < products.length; i++) {
				html += '<div class="item">';
				html+='<div class="item-content">';
				html+='		<figure>';
				html+='			<img src="'+products[i].image+'"/>';
				html+='			<figcaption>'+products[i].name+'</';
				html+='figcaption>';
				html+='</figure>';
				html+='		<p class="price-box"><span class="price">'+products[i].price+'</';
				html+='span></p>';
				html+='	</div></div>';
		}
		document.getElementById("product-list").innerHTML = html;
    }
  };
  xhttp.open("GET", "http://smsentertainment.club/api/get_products", true);
  xhttp.send();






// var html = '';
// 		for (var i = 0; i < products.length; i++) {
// 			html += '<div class="item">';
// 			html +=			'<div class="item-content">';
// 			html +=				'<figure>';
// 			html +=					'<img width="159px" height="214px" src="'+products[i].image+'"/>';
// 			html +=					'<figcaption>'+products[i].name+'</figcaption>';
// 			html +=				'</figure>';
// 			html +=				'<p class="price-box"><span class="price">'+products[i].price+'</span></p>';
// 			html +=				'<div class="over-flow">';
// 			html +=					'<p class="size">'+products[i].size+'</p>';
// 			html +=					'<div class="size-icon">';
// 			html +=						'<img src="'+products[i].sizeicon1+'"/>';
// 			html +=						'<img src="'+products[i].sizeicon2+'"/>';
// 			html +=						'<img src="'+products[i].sizeicon3+'"/>';
// 			html +=						'<img src="'+products[i].sizeicon4+'"/>';
// 			html +=					'</div>';
// 			html +=					'<div class="card-icon">';
// 			html +=						'<img src="'+products[i].cardicon1+'"/>';
// 			html +=						'<img src="'+products[i].cardicon2+'"/>';
// 			html +=						'<img src="'+products[i].cardicon3+'"/>';
// 			html +=					'</div>';
// 			html +=				'</div>';
// 			html +=			'</div>';
// 			html +=		'</div>'; 
// 		}
// document.getElementById("product-list").innerHTML = html;   //cach goi mot doi tuong html co ID product-list (html element object)
															//Document - la doi tuong chua ca page html
															//innerHTML- cac doi tuong trong doi tuong html day
															//html - doi tuong tao (var html o tren)


