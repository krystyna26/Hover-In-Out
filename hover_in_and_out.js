$(document).ready(function(){
    $( "img" ).hover(
         function(){ //change the pic
            var oldSrc = $(this).attr("src");
            var newSrc = $(this).attr("alt");
            $(this).attr("src", newSrc);
            $(this).attr("alt", oldSrc);
        }
        , function(){
            // $(this).attr("alt", "src");
            var oldSrc = $(this).attr("alt");
            var newSrc = $(this).attr("src");
            $(this).attr("alt", newSrc);
            $(this).attr("src", oldSrc);
        }
    );
});