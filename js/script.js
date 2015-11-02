 $(function() {
	$(".menu a").on("click", function (e) {
    console.log(this,e);
    if($(e.currentTarget).parent().parent().hasClass("lvl_one")){
      $(".lvl_one>li").removeClass("active");
      $(this).parent().addClass("active");  
    }        
  })
 });