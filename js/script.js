$(document).ready(function() {
     $(this).nextAll().css({"background": "#ccc"});
   $('.selectpicker').change(function(){
       $(this).next().removeAttr('disabled');
       $(this).nextAll().attr('diasbled');
       $(this).next().nextAll().css({"background": "#ccc"})
       console.log($(this).nextAll().attr('diasbled','disabled'))
   })
})