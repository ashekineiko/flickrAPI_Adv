// YOUR CODE GOES HERE
$(document).ready(function (){
    $("#search-btn").click(function(){
        var khalu = $("#search-query").val();
        console.log(khalu);
        
        searchFlickr(khalu, function(alu){
        console.log(alu);
        
        });
            
    });
});