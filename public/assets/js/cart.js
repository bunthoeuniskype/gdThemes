    $(function(){
         $('.add-to-card').click(function(){ 
             var activity_id = $(this).attr('data-id');   
             var numPart =  $('#partnum').val();
             if(numPart==0){
                 $('.requirePartnum').text('Please fill number of participant to Book now,Please check again  !');
                    return false;
                }       
             $('.requirePartnum').text('');              
             $.ajax({
                url: ajaxUrl+'/cart/add',
                type: 'post',
                data: {id:activity_id,number:numPart},               
                success: function(response){
                     if(response.status == 200){
                        getCart();
                        alertMsg(response.message,1);
                     }else{
                      
                     }
                }
            });       
    });

    function getCart(){
         $.ajax({
                url: ajaxUrl+'/cart/get',
                type: 'get',
                success: function(response){
                    if(response.status == 200){                         
                        $('#cart-number').text(response.data.totalQty);
                         $('html, body').animate({
                                  scrollTop: 0
                                }, 800);
                    }else{
                       window.location.reload(true);
                    }
                }
            });       
        }    
   
   $('.remove-cart').on('click',function(){ 
        cart_id = $(this).attr('data-cart-remove');
        swal({
              title: "",
              text: "Are you sure, Remove this offer ?",
              icon: "warning",
              buttons: ["Cancel","Yes"],
              dangerMode: true,              
            })
            .then((willDelete) => {                
              if (willDelete) {
                 $.ajax({
                url: ajaxUrl+'/cart/remove',
                type: 'POST',
                data:{id:cart_id},
                success: function(response){                 
                   $('.remove-list-'+cart_id).remove();
                   window.location.reload(true);
                    }
                }); 
              } 
        });
        
   });

   $('.btnUpdateCart').on('click',function(){

      var Id = $(this).attr('data-id');
      var Qty = $('#text-cart-number-'+Id).val();
     
      if(Qty == "" || Qty <= 0){
       $('#text-cart-number-'+Id).focus();
       return false;
      }
    
     $('.btnUpdateCart.'+Id).text('Updating..');

     $.ajax({
      url:ajaxUrl+"/cart/update",
      type:"POST",
      data:{qty:Qty,id:Id},
      success: function(response){
         $('.btnUpdateCart.'+Id).text('Update');        
         window.location.reload(true);
      }
     })

   })
})

function updateCart(id,val){
     $('#qty_cart').val(val);
     $('#id_cart').val(id);
     $('#updateCartModel').modal({backdrop:'static',keyboard:false});     
} 

$('.btnUpdateCartModel').on('click',function(){
     Qty = $('#qty_cart').val();
     Id  = $('#id_cart').val();

     if(Qty == "" || Qty <= 0){
       $('#qty_cart').focus();
       return false;
     }
     $('.btnUpdateCartModel').text('Updating..');

     $.ajax({
      url:ajaxUrl+"/cart/update",
      type:"POST",
      data:{qty:Qty,id:Id},
      success: function(response){
         $('.btnUpdateCartModel').text('Update');
         $('#updateCartModel').modal('hide');
        // window.location.reload(true);
      }
     })

});