	$(function(){
   				
		list_notebook();
});

	
	function list_notebook(){
		$('#list_notebook').html("");
		$.ajax({
			url:basepath+"/edit/listnotebook",
			type:"get",	
			success:function(data){

				if(getCookie("userId")!=null)
				for(var i=0;i<data.length;i++){
					
					$('#list_notebook').append("<li class='online'  id='notebook_"+data[i].status
					+"' ondblclick='rename_notebook(this)' onmouseover='click_notebook(this)' onmouseout=''><a   class=''  >"
					+"<i class='fa fa-book' title='online' rel='tooltip-bottom' ></i>"
					+data[i].message+"</a></li>"
					);
				}
				else
					$("body").html(data);
				
			}
		});
	}
	
	