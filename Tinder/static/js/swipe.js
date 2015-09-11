(function () {})();

// Object to manage Tinder card data.
var cardManager = (function() {
    var obj = {};
    var cards = [];
    var rightCards = [];
    var leftCards = [];

    obj.init = function(newCards) {
        cards = newCards;
    };

    obj.getCards = function() {
        return cards;
    }

    obj.renderCard = function(mountNode) {
        if (cards.length === 0) {
            return;
        }
        var curCard = cards.pop();
        var cardNode = $(mountNode).append('<div id="cur-card">' + curCard.name +
            ', ' + curCard.age + '</div>');
        var mc = new Hammer(document.getElementById('cur-card'), {drag: true});

        mc.on("swipeleft swiperight drag", function(ev) {
            console.log(ev.type);
            switch (ev.type) {
            case "drag":
                var target = ev.target;
                $(target).css({
                    'transform': 'translate(' + event.gesture.deltaX + 'px,' +
                    event.gesture.deltaY + 'px)'});
                break;
            case "swipeleft":
                $('#cur-card').remove();
                leftCards.push(curCard);
                obj.renderCard(mountNode);
                break;
            case "swiperight":
                $('#cur-card').remove();
                rightCards.push(curCard);
                alert("It's a match!");
                obj.renderCard(mountNode);
                break;
            }
        });
        $('.jumbotron').get(0).addEventListener('touchmove', function(event) {
            var touch = event.targetTouches[0];
            touch_log = touch;
                   
            // Place element where the finger is
            event.target.style.left = touch.pageX + 'px';
            event.target.style.top = touch.pageY + 'px';
            event.preventDefault();
        }, false);
    }

    return obj;
})();



