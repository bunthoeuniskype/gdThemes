$(function () {
	$('#booking-now').on('click',function(){
		var numPart =  $('#partnum').val();
		if(numPart==0){
			$('.requirePartnum').text('Please fill number of participant to Book now,Please check again  !');
			return false;
		}		
		$('.requirePartnum').text('');
		$('#bookingModel').modal({backdrop:'static','keyboard':false});		
		var numPart =  $('#partnum').val();		
		 priceDis =  priceAfterDis.replace(currencyS,'');		 
		var total = parseFloat(priceDis * numPart).toFixed(2);
		$('.book-short-price-num').text(total+''+currencyS);
		$('#number-ticket').val(numPart);
	});

	$('#number-ticket').on('change keyup keydown',function(){	
		var numPart =  $(this).val();
		priceDis =  priceAfterDis.replace(currencyS,'');		 
		var total = parseFloat(priceDis * numPart).toFixed(2);
		$('.book-short-price-num').text(total+''+currencyS);		
	  })
	$('.book-pay').on('click',function(e){
		 e.preventDefault();
		numTicket = $('#number-ticket').val();
		if(numTicket <= 0){
			$('#number-ticket').focus();
			return false;
		}else{
   
		    number = $('#number-ticket').val();
		    id = $(this).attr('data-id');
		    data = {id:id,number:number};
		    $.ajax({
		      type:'POST',
		      url:ajaxUrl+'/pay-now',
		      data:data,
		      success:function(res){
		        if(res.status == 200){
		          location.href = ajaxUrl+'/confirm/payment';
		        }
		      }
		    });
		}
	})
})