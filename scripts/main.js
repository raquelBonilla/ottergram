

var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'; /*capital letters are convention for variables that should not be changed*/
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
	'use strict';
	var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
	detailImage.setAttribute('src', imageUrl);
	var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
	detailTitle.textContent = titleText;
}


function imageFromThumb(thumbnail) {

	'use strict';
	return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb (thumbnail) {
	'use strict';
	return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb( thumbnail) { //this function brings together all the other functions
	'use strict';
	setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) { //this function handles the event where the thumbnail image is clicked, it
	//does not take you to a different page
	'use strict';
	thumb.addEventListener('click', function(event) {
		event.preventDefault();
		setDetailsFromThumb(thumb);
		showDetails();
	});
}

function getThumbnailsArray() {
	'use strict';
	var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
	var thumbnailArray = [].slice.call(thumbnails);
	return thumbnailArray;
}

function hideDetails() {
	'use strict';
	document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() 
{
	'use strict';
	document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}
function addKeyPressHandler () 
{
	'use struct';
	document.body,addEventListener('keyup', function (event) 
	{
	event.preventDefault();
	console.log(event.KeyCode);
	if (event.keyCode === ESC_KEY) 
		{
			hideDetails();

		}
	}); 
}

function initializeEvents() {
	'use strict';
	var thumbnails = getThumbnailsArray();
	thumbnails.forEach(addThumbClickHandler);
	addKeyPressHandler();
}
initializeEvents();




















