$(".dark-btn").click(
    function(){
        $(".container, .box").toggleClass("dark");
    }
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
)

$(".reveal-btn").click(
    function(){
        // $(".book").addClass("reveal");
        // $(".book").css("display", "block")
        $(".book").show();
        $(".reveal-btn").hide();
    }
)


$( ".draggable" ).draggable({
    containment: ".container",
    scroll: false,
    snap:true,
    grid:[50,50],
    stack: ".draggable"
  } );