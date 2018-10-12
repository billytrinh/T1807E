var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
    if(ajax.readyState ==  4 && ajax.status == 200){
        var result = ajax.responseText;
        result = JSON.parse(result);
        var related_products = result.data;
        var html2 = '';
        for(var i = 0; i < related_products.length - 6; i++){
            html2+= '<li class="item-related">';
            html2+= '<div class="item-content">';
            html2+= '<figure class="show">';
            html2+= '<img src="'+related_products[i].image+'">';
            html2+= '<figcaption>Reebok Track Jacket</figcaption>';
            html2+= '</figure>';
            html2+= '<p class="price-box">'+related_products[i].price+'</p>';
            html2+= '<p class="size"> Size: S - M - L - XL</p>';
            html2+= '<p class="size-icons">';
            html2+= '<span class="red color">&nbsp;</span>';
            html2+= '<span class="black color">&nbsp;</span>';
            html2+= '<span class="blue color">&nbsp;</span>';
            html2+= '<span class="green color">&nbsp;</span>';
            html2+= '</p>';
            html2+= '<div class ="item-line"></div>';
            html2+= '<div class="icon-bot">';	
            html2+= '<i class="fa fa-globe"></i>';
            html2+= '<i class="fa fa-cart-plus"></i>';
            html2+= '<i class="fa fa-heart-o"></i>';
            html2+= '</div>';                          
            html2+= '</div>';
            html2+= '</li>';
        }
    document.getElementById("related-products").innerHTML = html2;
    }
};
ajax.open("GET", "http://smsentertainment.club/api/get_products", true);
ajax.send();

var ajax_page3 = new XMLHttpRequest();
ajax_page3.onreadystatechange = function(){
    if( ajax_page3.readyState == 4 && ajax_page3.status == 200){
        var result_3 = ajax_page3.responseText;
        result_3 = JSON.parse(result_3);
        var sale_products = result_3.data;
        var html3 = '';
        for(var i = 0; i < sale_products.length - 7; i++){
        html3+=' <li class="best-sale-product">';
        html3+='<div class="best-sale-content">';                     
        html3+='    <img src="'+sale_products[i].image+'">';
        html3+='   <div class="descrip">';
        html3+='       <p class="caption">'+sale_products[i].name+'</p>';
        html3+='       <div class="rate">';
        html3+='            <i class="fa fa-star"></i>';
        html3+='            <i class="fa fa-star"></i>';
        html3+='            <i class="fa fa-star"></i>';
        html3+='            <i class="fa fa-star"></i>';
        html3+='            <i class="fa fa-star"></i>';
        html3+='            <p class="price">'+sale_products[i].price+'</p>';
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
            }
};
ajax_page3.open("GET", "http://smsentertainment.club/api/get_products", true);
ajax_page3.send();
function checkForm(){
    var email = document.forms['form_data'].email.value;
    if(email.length > 0){
      return true;
    }
    else{
      if(document.forms['form_data'].email.nextElementSibling){
        document.forms['form_data'].email.nextElementSibling.remove();}
        else{
      var inputEmail = document.forms['form_data'].email.outerHTML;
      inputEmail+= '<p class="warning">Please type your email again!</p>';
      document.forms['form_data'].email.outerHTML = inputEmail;
        }
    }
    return false;
  }