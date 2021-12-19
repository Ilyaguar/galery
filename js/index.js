let main = $('.main')

$('.icon').on('click', function() {
    let pushed = $(this)

    if (!pushed.hasClass("selected")) {
        let tmplink = pushed[0].currentSrc
        let unselectedid = main[0].id

        unselected = $($('.imgRow')[0].children[unselectedid])
        pushed.addClass("selected")
        unselected.removeClass("selected")

        main[0].attributes[0].value = tmplink
        main[0].id = pushed[0].id - 1
    }
});