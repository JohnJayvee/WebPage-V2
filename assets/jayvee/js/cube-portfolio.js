(function($, window, document, undefined) {
    'use strict';

  
    
    var x = 0,
        init,
        container = $('.timeline-section'),
        /* TIMELINE SELECTOR */
        items = container.find('li'),
        containerHeight = 0,
        numberVisible = 3,
        /* NUMBER OF <li> TO SHOW IN SCROLLER */
        intervalSec = 10000000; /* INTERVAL TIME */

    if (!container.find('li:first').hasClass("first")) {
        container.find('li:first').addClass("first");
    }

    items.each(function() {
        if (x < numberVisible) {
            containerHeight = containerHeight + $(this).outerHeight();
            x = x + 1;
        }
    });

    container.css({
        height: containerHeight,
        overflow: "hidden"
    });

    function vertCycle() {
        var firstItem = container.find('li.first').html();

        container.append('<li>' + firstItem + '</li>');
        firstItem = '';
        container.find('li.first').animate({
            marginTop: "-105px",
            opacity: "0"
        }, 600, function() {
            $(this).remove();
            container.find('li:first').addClass("first");
        });
    }

    if (intervalSec < 700) {
        intervalSec = 700;
    }

    init = setInterval(function() {
        vertCycle();
    }, intervalSec);

    container.hover(function() {
        clearInterval(init);
    }, function() {
        init = setInterval(function() {
            vertCycle();
        }, intervalSec);
    });


});


