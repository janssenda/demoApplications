$(document).ready(function () {


modallistener();
navListener();
});


function modallistener(){
    var modal = $("#myModal")[0];
    var modalImg = $("#modalImg")[0];
    var captionText = $("#caption")[0];

    $(".close").click(function(){
        modal.style.display = "none"
    });

    $("#brand").click(function () {
        modal.style.display = "none"
    });

    $(document).on("click", ".post-image", function () {
        modal.style.display = "block";
        modalImg.src =this.src.substring(0,this.src.length-10)+".png";
        captionText.innerHTML = this.alt;
    });
}

function navListener() {
    var menu = $("#dropmenu");
    menu.hover(function () {
        $("#dropmenu").addClass("open");
    });
    menu.mouseleave(function () {
        $("#dropmenu").removeClass("open");
    });
}