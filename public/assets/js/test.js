    $(function(){   
    	 $('.btnTest').click(function(e){  
             e.preventDefault();              
             $.ajax({
                url: ajaxUrl+'/test',
                type: 'post',
                data: {id:'test'},               
                success: function(response){
                   
                }
            });  
          });      
       });
  