// Object to manage Tinder card data.
var cardManager = (function() {
    obj = {};

    /**
     * Example backend endpoints
     * These functions represent backend endpoints
     * for saving card data, and would be integrated
     * with the database in a real production setting.
     */
    
    // Backend endpoint
    function saveSwipe(swipeType, id) {
        // Not implemented since there is no backend.
    }

    // Display it's a match!
    function showMatch() {
        $('#content').prepend('<img id="its-a-match"' +
            'src="static/images/its-a-match.png" />').on('click', function() {
            $('#its-a-match').remove();
        });
    }

    /**
     * Handles decision and saves it. 
     * @param {string} swipeType -- "swipeleft" or "swiperight"
     * @param {string} id -- Card id that
     */
    function handleDecision(swipeType, id) {
        $('#its-a-match').remove();
        if (swipeType === "swiperight") {
            showMatch();
        }
        saveSwipe(swipeType, id);
    }

    // Add Hammer.js handlers.
    function addHandler(element) {
        var mc = new Hammer(element);
        mc.on('swipeleft swiperight', function(ev) {
            console.log(element);
            var id = element.getAttribute('card_id');
            $(element).remove();
            handleDecision(ev.type, id);
        });
    }

    // Initializes handlers.
    obj.init = function() {
        // Array of cards
        cards = $('#viewport').find('.stack').children();
        for (var i = 0; i < cards.length; i++) {
            addHandler(cards[i]);
        }
    }
    
    return obj;
})();



