function get_student(students)
{
    var html = '';
    html+='<table style="width: 100%">'
    html+='<tr>'
    html+='    <th>ID</th>'
    html+='    <th>Name</th>'
    html+='    <th>Birthday</th>'
    html+='    <th>Code</th>'
    html+='    <th>Class</th>'
    html+='    <th>Gender</th>'
    html+='</tr>'
    for (var i = 0; i < students.length; i++)
    {
        html+='<tr>'
        html+='    <td>'+students[i].id+'</td>'
        html+='    <td>'+students[i].student_name+'</td>'
        html+='    <td>'+students[i].dob+'</td>'
        html+='    <td>'+students[i].mssv+'</td>'
        html+='    <td>'+students[i].class_id+'</td>'
        html+='    <td>'+students[i].gender+'</td>'
        html+='</tr>'
        html+='</table>'
    }
    document.getElementById("student_list").innerHTML = html;
}

/*
function renderHtml(products){
	//var result = JSON.parse(result);
	//var products = result.data;
	var html = '';
		for (var i = 0; i < products.length; i++) {
			html += '<div class="item col-md-4">';
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
		//document.getElementById("product_list").innerHTML = html;
		jQuery("#product_list").append(html);
}*/


