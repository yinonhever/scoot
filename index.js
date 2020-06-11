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

$(".header__btn").on("click", function() {
    $(".header__navigation").removeClass("open");
    $("body").removeClass("no-scroll");
    $(".header__nav-toggle").prop("src", "assets/icons/hamburger.svg");
})

