    var offset = 0;   
    var limit = 3; 
    $('.load-more-comment').click(function(){ 
             var activity_id = $(this).attr('data-id'); 
             offset++;             
             $.ajax({
                url: ajaxUrl+'/comment/more',
                type: 'get',
                data: {offset:offset,limit:limit,activity_id:activity_id},
                beforeSend:function(){
                    $(".load-more-comment").text("Loading...");
                },
                success: function(response){
                    // Setting little delay while displaying new content
                    setTimeout(function() {
                        // appending posts after last post with class="post"
                        $(".comment-post:last").after(response).show().slideDown("slow"); 
                            $(".load-more-comment").text("Load more");                    
                    }, 2000);

                    if(response == ''){
                        $(".load-more-comment").text("no record"); 
                        $(".load-more-comment").removeClass('load-more');
                    }                    
                }
            });       
    });

    function funReplyShow(dataId) {
        //var dataId = $(this).attr('data-id');
        var rattingHtml = '<fieldset class="rating position-rating">';
        rattingHtml +='<input type="radio" id="star5Reply" name="ratingReply" value="5" /><label class = "full" for="star5Reply" title="Awesome - 5 stars"></label>';  
        rattingHtml += '<input type="radio" id="star4halfReply" name="ratingReply" value="4.5" /><label class="half" for="star4halfReply" title="Pretty good - 4.5 stars"></label>'; 
        rattingHtml += '<input type="radio" id="star4Reply" name="ratingReply" value="4" /><label class = "full" for="star4Reply" title="Pretty good - 4 stars"></label>';
        rattingHtml += '<input type="radio" id="star3halfReply" name="ratingReply" value="3.5" /><label class="half" for="star3halfReply" title="Meh - 3.5 stars"></label>';
        rattingHtml += '<input type="radio" id="star3Reply" name="ratingReply" value="3" /><label class = "full" for="star3Reply" title="Meh - 3 stars"></label>';
        rattingHtml += '<input type="radio" id="star2halfReply" name="ratingReply" value="2.5" /><label class="half" for="star2halfReply" title="Kinda bad - 2.5 stars"></label>';
        rattingHtml += '<input type="radio" id="star2Reply" name="ratingReply" value="2" /><label class = "full" for="star2Reply" title="Kinda bad - 2 stars"></label>';        
        rattingHtml += '<input type="radio" id="star1halfReply" name="ratingReply" value="1.5" /><label class="half" for="star1halfReply" title="Meh - 1.5 stars"></label>';
        rattingHtml += '<input type="radio" id="star1Reply" name="ratingReply" value="1" /><label class = "full" for="star1Reply" title="Sucks big time - 1 star"></label>';
        rattingHtml += '<input type="radio" id="starhalfReply" name="ratingReply" value="0.5" /><label class="half" for="starhalfReply" title="Sucks big time - 0.5 stars"></label>';
        rattingHtml += '<input type="radio" id="star0Reply" name="ratingReply" value="0" checked/>';
        rattingHtml += '</fieldset>';

        var htmlAppend = '<div class="media-body reply-comment remove-reply-comment-'+dataId+'">'+rattingHtml+'<textarea id="data-reply-comment-'+dataId+'" required class="form-control reply-comment-area comment" rows="5" placeholder="Leave a comment"></textarea><p class="btn-comment-reply" data-reply-id="'+dataId+'" onclick="funReplyComment('+dataId+')">SUBMIT</p></div></div>';
        $('.btn-reply-comment-'+dataId).addClass('hide');       
        $('.reply-comment-reply-'+dataId).html(htmlAppend);             
    }

   function funReplyComment(dataId) {  
        data = $('#data-reply-comment-'+dataId).val();  
        var rating_comment = $("input[name='ratingReply']:checked").val();    
        dataSend = {'comment':data,rating:rating_comment};       
         $.ajax({
            type:"POST",
            url: ajaxUrl+'/comment/reply/'+dataId,
            data:dataSend,
            success:function(res){  
            if(res.status == 200){
                $('.remove-reply-comment-'+dataId).remove();                
                $('.comment-add-reply-'+dataId).load(ajaxUrl+'/comment/getbyid/'+dataId);  
                var AppendReply = '<p data-id="'+dataId+'" onclick="funReplyShow('+dataId+')" class="btn-reply-comment cursor">Reply</p>';
                $('.reply-comment-reply-'+dataId).append(AppendReply);          
            }
          }
        });
    }
        
    //$("#input-id").rating();
    function trash(id) {
        swal({
          title: "Delete",
          text: "Are you sure you want to delete this comment?",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
            if(willDelete){
                $.ajax({
                    type:"GET",
                    url:ajaxUrl+"/comment/trash",
                    data:{id:id},
                    success:function(data){
                        if(data !='false'){
                            $("#"+data.id).remove();
                        }else{
                            swal("Somthing went wrong!");   
                        }
                    },error:function(data){

                    }
                })
            }
        });
    }  

    function edit(id){
        $.ajax({
            type:"GET",
            url:ajaxUrl+"/comment/edit",
            data:{id:id},
            success:function(data){
                if(data!='false'){
                    $("#comment").val(data.comment);
                    $("#comment").focus();
                    $("#comment-submit").text("UPDATE");
                    $("#comment_id").val(data.id);
                }else{
                  swal("Somthing went wrong!"); 
                }

            },error:function(data){

            }
        })
    }
    $("#comment-submit").on('click', function(){      
          if(authorizeStatus==401){
            $('#myLogin').modal({'dropback':'static','keyboard':false});
            return false;
            }            
              
          var rating_comment = $("input[name='rating']:checked").val();      
              var comment = $("#comment").val();
          var activity_id = $("#activity_id").val();
          var comment_id = $("#comment_id").val();
          
          if(comment!=''){
            $.ajax({
                type:"GET",
                url:ajaxUrl+"/comment",
                data:{comment:comment,activity_id:activity_id,comment_id:comment_id,rating:rating_comment},
                beforeSend:function(data){
                 $(".position").removeClass('hide');
                 $('.rating').addClass('activities-list-blur');
                },success:function(data){
                    $("#comment-submit").val('SUBMIT');
                    $("#comment_id").val('');  
                    $("#comment").val('');
                    $(".position").addClass('hide')
                    $('.rating').removeClass('activities-list-blur')
                    $(".comment-listing").html('');
                    $(".comment-listing").append(data);
                },error:function(data){

                }
            })
          }else{
            $("#comment").focus();
          }
        })