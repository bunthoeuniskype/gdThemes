jQuery.validator.addMethod("dateITA",function (value, element) {
     var check = false;
     var re = /^\d{1,2}\/\d{1,2}\/\d{4} \d{2}\:\d{2}$/;   
     //var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;      
     if (re.test(value)) {  
      check = true;            
        /* try {
             // var d = $.datepicker.parseDate('dd/mm/yy', value);
             check = true;
         } catch (e) {             
             check = false;
         } */
      // end of modified code
     } else{
         check = false;
     }
     return this.optional(element) || check;
},'');

$.validator.addMethod('filesize', function (value, element, arg) {
            var minsize=1000; // min 1kb
            if((value>minsize)&&(value<=arg)){
                return true;
            }else{
                return false;
            }
        });

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
$('.mce-branding').hide();

// Stop user to press enter in textbox
 $("input:text").keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                return false;
            }
        });
$('#partnum').on('change',function(){
        valP = $(this).val();   
        if(valP > 0){
          $('.booking').removeClass('disabled');
          $('.booking').addClass('pointer');          
        }else{
          $('.booking').removeClass('pointer');
          $('.booking').addClass('disabled');
        }   
    
    });

