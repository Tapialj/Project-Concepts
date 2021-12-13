$(function ()
{

    $(".mobile-menu").click(expandMenu);


    function expandMenu()
    {
        $(".primary-nav").toggleClass("menu-expand");
        $(this).toggleClass("menu-open");
    };
});