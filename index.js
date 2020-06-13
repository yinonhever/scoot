// MANAGING THE MOBILE MENU

$(".header__nav-toggle").on("click", function () {
    $(".header__navigation").toggleClass("open");
    $("body").toggleClass("no-scroll");

    const menuOpen = $(".header__navigation").hasClass("open");

    if (menuOpen) {
        $(this).prop("src", "assets/icons/close.svg");
    }
    else {
        $(this).prop("src", "assets/icons/hamburger.svg");
    }
})

$(".header__btn").on("click", function () {
    $(".header__navigation").removeClass("open");
    $("body").removeClass("no-scroll");
    $(".header__nav-toggle").prop("src", "assets/icons/hamburger.svg");
})


// ANIMATING THE ITEMS INSIDE THE MOBILE MENU

if ($(window).width() <= 700) {
    var delay = 0.2;

    $(".header__nav-link").each(function () {
        $(this).css("transition", "all 0.4s " + delay + "s");
        delay = delay + 0.2;
    })

    $(".header__btn").css("transition", "all 0.4s " + delay + "s");
}


// MANAGING THE ACCORDION

$(".accordion__item:first-child").addClass("active");

$(".accordion__top").click(function () {
    $(this).parent().toggleClass("active");
})