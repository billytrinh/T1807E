if(localStorage.getItem('item')){
    renderHtml(localStorage.getItem('item'));
}
else{
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
    if(ajax.readyState ==  4 && ajax.status == 200){
    var result = ajax.responseText;
    localStorage.setItem('item', result);
    renderHtml(localStorage.getItem('item'));
        }
    };
    ajax.open("GET", "http://smsentertainment.club/api/get_products", true);
    ajax.send();
    }

function renderHtml(result){
        var result = JSON.parse(result);
        var related_products = result.data;
        var html2 = '';
        for(var i = 0; i < related_products.length - 6; i++){
            html2+='	<li class="item">';
			html2+=' <div class="item-content">';
			html2+='<figure class="show">';
			html2+='<img src="'+related_products[i].image+'">';
			html2+='<figcaption>Reebok Track Jacket</figcaption>';
			html2+='</figure>';
			html2+='<p class="price-box">'+related_products[i].price+'</p>';
			html2+='<p class="size"> Size: S - M - L - XL</p>';
			html2+='<p class="size-icons">';
			html2+='<span class="red color">&nbsp;</span>';
			html2+='<span class="black color">&nbsp;</span>';
			html2+='<span class="blue color">&nbsp;</span>';
			html2+='<span class="green color">&nbsp;</span>';
			html2+='</p>';
			html2+='<div class ="item-line"></div>';
			html2+='<div class="icon-bot">';
			html2+='<i class="fa fa-globe"></i>';
			html2+='<i class="fa fa-cart-plus"></i>';
			html2+='<i class="fa fa-heart-o"></i>';
			html2+='</div>';                      
			html2+='</div>';
			html2+='</li>';
        }
    document.getElementById("related-products").innerHTML = html2;
    };

if(localStorage.getItem('items')){
    runHTML(localStorage.getItem('items'));
}
else{
    var ajax_page3 = new XMLHttpRequest();
    ajax_page3.onreadystatechange = function(){
    if( ajax_page3.readyState == 4 && ajax_page3.status == 200){
    var result_3 = ajax_page3.responseText;
    localStorage.setItem('items', result_3);
    runHTML(localStorage.getItem('items'));
        }
    };
    ajax_page3.open("GET", "http://smsentertainment.club/api/get_products", true);
    ajax_page3.send();
}

function runHTML(result_3){
        var result_3 = JSON.parse(result_3);
        var sale_products = result_3.data;
        var html3 = '';
        for(var i = 0; i < sale_products.length - 7; i++){
        html3+=' <li class="best-sale-product">';
        html3+='<div class="best-sale-content">'; 
        html3+='<div class="sale_picture">' ;                  
        html3+='    <img src="'+sale_products[i].image+'">';
        html3+='</div>' ;
        html3+=' <div class="descrip">';
        html3+=' <div class="descrip_page3">';
        html3+='       <p class="caption">'+sale_products[i].name+'</p>';
        html3+=' </div>';
        html3+='       <div class="rate">';
        html3+='         <div class="star_box">';
        html3+='<div class="star_rate"></div>';
        html3+='       </div>';
        html3+='       <div class="rate_price">';
        html3+='            <p class="price">'+sale_products[i].price+'</p>';
        
        html3+='</div>';      
        html3+='        </div>    '; 
        html3+='             <div class="hide">';
        html3+='                 <i class="fa fa-cart-plus"></i>';
        html3+='                 <p>add to cart</p>';
        html3+='             </div>       ';                
        html3+='   </div>';
        html3+=' </div>';
        html3+='</li>';
        }
        document.getElementById("sale_products").innerHTML = html3;
    };
    function show_menu(){
        document.getElementById('hidden_menu').style.display = 'block';
    }
    function hide_menu(){
      document.getElementById('hidden_menu').style.display = 'none';
    }