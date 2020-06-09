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


