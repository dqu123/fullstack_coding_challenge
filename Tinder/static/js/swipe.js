// Object to manage Tinder card data.
var cardManager = (function() {
    obj = {};

    function addHandler(element) {
        var mc = new Hammer(element);
        mc.on("swipeleft swiperight", function(ev) {
            console.log(ev.type);
            $(element).remove();
            switch(ev.type) {    
            case "swipeleft":
                break;
            case "swiperight":
                alert("It's a match!");
                break;
            }
        });
    }

    obj.init = function() {
        array = $('#viewport').find('.stack').children();
        for (var i = 0; i < array.length; i++) {
            addHandler(array[i]);
        }
    }
    
    return obj;
})();



