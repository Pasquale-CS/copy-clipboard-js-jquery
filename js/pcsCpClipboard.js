/*
    @Author:        Pasquale Cappa Spina;
    @Website:       http://pasqualecappaspina.com;
    @Description:   Plugin copy clipboard for Javascript and jQuery;
*/


// Plugin
(function ( $ ) {
 
    $.fn.pcsCpClipboard = function( options ) {

    	var el = this;
    	var id = $(el).attr('id');

        // Default options.
        var settings = $.extend({
            // These are the defaults.
            button: "#pcs-cc-button"
        }, options );
 
        // Copy
        $(settings.button).click(function(e) {
            e.preventDefault();

            pcsCpClipboard(id);
        });
        
    };
 
}( jQuery ));


// Functions
function copyToClipboard() {
	getSelectionText();
	document.execCommand("copy");
}

function getSelectionText() {
	var selectedText = "";

	if (window.getSelection) { // all modern browsers and IE9+
		selectedText = window.getSelection().toString();
	}

	return selectedText;
}

function selectElementContents(el) {
	el = document.getElementById(el);
	var body = document.body, range, sel;

	if (document.createRange && window.getSelection) {
		range = document.createRange();
		sel = window.getSelection();
		sel.removeAllRanges();
		try {
			range.selectNodeContents(el);
			sel.addRange(range);
		} catch (e) {
			range.selectNode(el);
			sel.addRange(range);
		}
	} else if (body.createTextRange) {
		range = body.createTextRange();
		range.moveToElementText(el);
		range.select();
	}
}

function prepare(el) {
	$("input").each(function(index) {
		$(this).after('<span class="remove">' + $(this).val() + '</span>');
	});

	$("select").each(function(index) {
		$(this).after('<span class="remove">' + $(this).val() + '</span>');
	});

	$("textarea").each(function(index) {
		$(this).after('<span class="remove">' + $(this).val() + '</span>');
	});
}

function pcsCpClipboard(el) {
	prepare(el);
	selectElementContents(el);
	copyToClipboard();

	$(".remove").remove();
}