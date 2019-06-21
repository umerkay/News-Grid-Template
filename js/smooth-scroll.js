$('#cover .navButton').on('click', function (event) {
    event.preventDefault();
    let scrollPos;
    if (event.currentTarget.name == "next") {
        // const hash = "#f" + (parseInt(event.currentTarget.parentNode.parentNode.parentNode.id.slice(1)) + 1);
        scrollPos = $('#cover').scrollTop() + $('#cover').height();
    } else {
        scrollPos = $('#cover').scrollTop() - $('#cover').height();
        // const hash = "#f" + (parseInt(event.currentTarget.parentNode.parentNode.parentNode.id.slice(1)) - 1);
    }


    $('#cover').animate(
        {
            scrollTop: scrollPos - scrollPos%$("#cover").height()
            // scrollTop: $(hash).offset().top
        },
        500
    );
});

$('#cover').hover(()=>{}, function(event) {
    $('#cover').animate(
        {
            scrollTop: 0
        },
        1500
    );
});