    var offset = 0;    
    $('.load-more').click(function(){       
             offset++;             
             $.ajax({
                url: loading_more_offer_url,
                type: 'get',
                data: {offset:offset,limit:limit},
                beforeSend:function(){
                    $(".load-more").text("Loading...");
                },
                success: function(response){
                    // Setting little delay while displaying new content
                    setTimeout(function() {
                        // appending posts after last post with class="post"
                        $(".m-list-offer:last").after(response).show().slideDown("slow"); 
                            $(".load-more").text("Load more");                    
                    }, 2000);

                    if(offset*limit >= total_record){
                        $(".load-more-myoffer").text("no record"); 
                        $(".load-more-myoffer").removeClass('load-more');
                    }
                }
            });       
    });

