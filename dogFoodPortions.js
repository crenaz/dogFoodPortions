(function ($) { 
    $(document).ready(function(){
        console.log("Hello, Welcome to the DogFood Portion Trasitioner App!");
        console.log("  Please enter the amount of days to transition:");
        
        var transitionDays = Number(prompt("Pick a number of days","")), start=0, tree="#";
        if(!isNaN(transitionDays))
            while (transitionDays>start) {
                console.log(tree);
                start+=1;
                tree=tree+"#";
            }
        else alert("Hey, Why didn't you give me a number?");
    });
})(jQuery);