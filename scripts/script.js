function loadImages() {
    var image = document.getElementsByTagName('img');
    for (var i = 0; i < image.length; i++) {
        if(image[i].getAttribute('data-src')) {
            image[i].setAttribute('src',image[i].getAttribute('data-src'));
        }
    }
}

function fadeInElements() {

}

window.onload = function() {
    loadImages();
};

window.onscroll = function(){
    fadeInElements();
};