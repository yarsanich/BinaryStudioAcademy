$(document).ready(
    function(){
        $(".gadgets").click( function(){
            $("#first").toggle();
        }
        );
        $(".software").click( function(){
            $("#second").toggle();
        }
        );
        $(".interests").click( function(){
            $("#third").toggle();
        }
        );
});