//for menu icon
$(".navbar-toggler").click(function () {
    let result = $(".navbar-collapse").hasClass("show");
    console.log(result);

    if(result){

        $(".menu-icon").removeClass("fa-close").addClass("fa-bars");



    }else{

        $(".menu-icon").removeClass("fa-bars").addClass("fa-close");


    }

});

//for menu bar up
$(`.nav-link`).click(function(){
    $(`.navbar-collapse`).removeClass(`show`);
    $(`.menu-icon`).addClass(`fa-bars`);
});

//for loading
$(window).on("load",function () {
    $('.loader-container').fadeOut(500,function () {
        $(this).remove();
    });
});

