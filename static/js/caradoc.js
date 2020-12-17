// Show an element
var show = function (elem) {
	elem.classList.add('is-visible');
};

// Hide an element
var hide = function (elem) {
	elem.classList.remove('is-visible');
};

// Toggle element visibility
var toggle = function (elem) {
	elem.classList.toggle('is-visible');
};

// Control webmentions visibility by hash location
var mentionsVisiblity = function() {
    var content = document.querySelector('.comments__mentions.toggle-content');
    var header = document.querySelector('.comments__header.toggle-content');
    if (!content && !header) return;

    if (location.hash == '#webmentions' || location.hash.includes('#')) {
        hide(header);
        show(content);
    } else {
        show(header);
        hide(content);
    }
}

mentionsVisiblity();

// Listen for hash location change events
window.addEventListener('hashchange', function (event) {
    mentionsVisiblity();
}, false);
