var html = '';
		for (var i = 0; i < items.length; i++) 
{		
		html+='<div class="item">';
		html+='	<div class="row">';
		html+='		<figure class ="image">';
		html+='			<img src="'+items[i].image+'">';
		html+='			<figcaption>';
		html+='				'+items[i].Name+'';
		html+='			</figcaption>';
		html+='		<figure>';
		html+='		<p class="price">'+items[i].price+'</p>';
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
}
document.getElementById("page1_list").innerHTML = html;