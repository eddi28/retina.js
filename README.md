retina
======

retina.js is a jQuery library for changing images on retina-display-clients to higher resolution images

##Getting Started

###Requirements
retina.js needs jQuery, which must be loaded before retina.js

you need your images in two pixel ratio:

* standard ratio
* double ratio

######For example:
image.jpg - width: 100px, height: 100px
image_2x.jpg - width: 200px, height: 200px

###Howto Install
The installation of retina.js is quite easy. 

1. Download retina.js/retina.min.js from dist - folder and copy it to your webserver
2. Implement file to your script part in your HTML like

```
	<script src="retina.min.js"></script>
```

##Examples
coming soon! REALLY ;-)

##Features
* setup function .retina()
* check display is retina display
* set attributes to <img>-tag with initial size of image
* change suffix for higher images

##Usage

###Automatic Usage
for check images automatically set data-attribute 'data-ratio="true"' in the image tag.
after that, the plugin work without adding other code.

###Manually Usage
Feel free to run the plugin with following code in your JavaScript:

```
$(document).ready(function() {
    $('img').each(function() {
		$(this).retina({
			suffix		: '_2x',
			dimension	: true
		});
    });
});
```

##Bootstrap integration

##Issues
Discovering a bug? Idea's for new features? Please let me know and create an issue here in GitHub!
https://github.com/notheavy/retina.js/issues

##License
Copyright 2013, @darkes_net
Licensed under the MIT-License