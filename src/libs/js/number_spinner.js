(function( $ ) {
    $.fn.pairedNumberSpinner = function( options ) {
        var settings = $.extend( {}, $.fn.pairedNumberSpinner.defaults, options );
        var incrementNumber = $(this).find(".increment-number");
        var addButton = $(this).find(".increment-button");
        var removeButton = $(this).find(".decrement-button");

        addButton.click(function() {
            var currVal = parseInt(settings.inputDom.val());
            var newVal = currVal + settings.step;
            var pairedAddButton = settings.pairedDom.find(".increment-button");
            var pairedRemoveButton = settings.pairedDom.find(".decrement-button");

            if (newVal >= settings.max) {
                $(this).attr("disabled", "disabled");
                $(this).addClass("disabled");
                pairedAddButton.attr("disabled", "disabled");
                pairedAddButton.addClass("disabled");
                settings.onMaximum.call($(this));
            } else {
                if (settings.pairedInputDom.length > 0) {
                    var totalQty = parseInt(settings.pairedInputDom.val()) + newVal;
                    if (totalQty >= settings.max) {
                        $(this).attr("disabled", "disabled");
                        $(this).addClass("disabled");
                        pairedAddButton.attr("disabled", "disabled");
                        pairedAddButton.addClass("disabled");
                        removeButton.removeAttr("disabled");
                        removeButton.removeClass("disabled");
                        settings.onMaximum.call($(this));
                    }
                }
            }
            incrementNumber.html(newVal);
            settings.inputDom.val(newVal);
            if (settings.inputDom.val() > settings.min) {
                removeButton.removeAttr("disabled");
                removeButton.removeClass("disabled");
            } 
            
            if (settings.pairedInputDom.length > 0) {
                if (settings.pairedInputDom.val() > 0) {
                    removeButton.removeAttr("disabled");
                    removeButton.removeClass("disabled");
                    pairedRemoveButton.removeAttr("disabled");
                    pairedRemoveButton.removeClass("disabled");
                }
            }

            settings.onIncrement.call($(this));
        });

        removeButton.click(function() {
            var currVal = parseInt(settings.inputDom.val());
            var pairedAddButton = settings.pairedDom.find(".increment-button");
            var pairedRemoveButton = settings.pairedDom.find(".decrement-button");
            var newVal = currVal - settings.step;

            if (newVal <= 0) {
                $(this).attr("disabled", "disabled");
                $(this).addClass("disabled");
            }

            if (settings.pairedInputDom.length > 0) {
                var totalQty = parseInt(settings.pairedInputDom.val()) + newVal;
                if (totalQty <= settings.min) {
                    $(this).attr("disabled", "disabled");
                    $(this).addClass("disabled");
                    pairedRemoveButton.attr("disabled", "disabled");
                    pairedRemoveButton.addClass("disabled");
                    settings.onMinimum.call($(this));
                }
            } else {
                if (newVal <= settings.min) {
                    $(this).attr("disabled", "disabled");
                    $(this).addClass("disabled");
                    settings.onMinimum.call($(this));
                }
            }

            if (settings.pairedInputDom.val() <= 0) {
                if (newVal <= settings.min) {
                    $(this).attr("disabled", "disabled");
                    $(this).addClass("disabled");
                    pairedRemoveButton.attr("disabled", "disabled");
                    pairedRemoveButton.addClass("disabled");
                    settings.onMinimum.call($(this));
                }
            }
            
            incrementNumber.html(newVal);
            settings.inputDom.val(newVal);

            addButton.removeAttr("disabled");
            addButton.removeClass("disabled");
            if (settings.pairedInputDom.length > 0) {
                pairedAddButton.removeAttr("disabled");
                pairedAddButton.removeClass("disabled");
            }

            settings.onDecrement.call($(this));
        });
    };

    $.fn.pairedNumberSpinner.defaults = {
        pairedDom: null,
        pairedInputDom: null,
        inputDom: null,
        step: 1,
        min: null,
        max: null,
        onIncrement : function() {},
        onDecrement : function() {},
        onMaximum : function() {},
        onMinimum : function() {}
    };
 
}( jQuery ));