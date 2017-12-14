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

function scrollToMore() {
    var element = document.getElementById("expertin");
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

window.onload = function() {
    loadImages();
};

window.onscroll = function(){
    fadeInElements();
};