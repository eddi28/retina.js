/*!
 * retina.js
 * 
 * @see https://github.com/notheavy/retina.js
 * @author dan @darkes_net
 * @license MIT
 */
+function($) {
    'use strict';

    var VERSION = '1.0.0';

    var Retina = function(element, options) {
	this.$element = $(element);
	this.options = $.extend({}, Retina.DEFAULTS, options);
	this.init();
	return;
    };

    Retina.DEFAULTS = {
	suffix : '_2x',
	dimension : true
    };

    Retina.prototype.init = function() {
	window.devicePixelRatio >= 2 ? this.isRetina = true : this.isRetina = false;
	if (this.options.dimension)
	    this.dimension();
	return;
    };

    Retina.prototype.dimension = function() {
	this.$element.load(function() {
	    $(this).attr('width', $(this).width() + 'px');
	    $(this).attr('height', $(this).height() + 'px');
	});
	return;
    };

    Retina.prototype.isset = function() {
	var is = new RegExp('(.+)(' + this.options.suffix + '\\.\\w{3,4})');
	return is.test(this.$element.attr('src'));
    };

    Retina.prototype.refresh = function() {
	var el = this.$element;
	if (this.isset())
	    return;
	var new_image_src = el.attr('src').replace(/(.+)(\.\w{3,4})$/, '$1' + this.options.suffix + '$2');
	$.ajax({
	    url : new_image_src,
	    type : 'HEAD',
	    success : function() {
		el.attr('src', new_image_src);
	    }
	});
    };

    var old = $.fn.retina;

    $.fn.retina = function(option) {
	return this.each(function() {
	    var ratio = new Retina(this, option);
	    ratio.refresh();
	});
    };

    $.fn.retina.Constructor = Retina;

    $.fn.retina.noConflict = function() {
	$.fn.retina = old;
	return this;
    };

    $(window).on('load', function() {
	$('[data-ratio="true"]').each(function() {
	    $(this).retina();
	});
    });

}(jQuery);