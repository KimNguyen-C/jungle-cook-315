function toggleMobileMenu(menu){
    console.log("menu" + menu )
    menu.classList.toggle("open");
}

$("#hamburger-icon").on("click", function() {
    $(this).toggleClass("open");
    $(".mobile-menu").toggleClass("open");
});
