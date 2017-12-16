function loadImages() {
    var image = document.getElementsByTagName('img');
    for (var i = 0, n = image.length; i < n; i++) {
        if(image[i].getAttribute('data-src')) {
            image[i].setAttribute('src',image[i].getAttribute('data-src'));
        }
    }
}

function fadeInElements() {
    var elements = getElementsWithAttribute('data-animate');
    for(var i = 0, n = elements.length; i < n; i++) {
        var offset = parseInt(elements[i].getAttribute('data-animate-offset'))||0;
        var objectBottom = getPosition(elements[i]).top+offset; //elements.position.top + elements.outerHeight
        var windowBottom = getScrollPosition() + getWindowHeight();

        if(objectBottom < windowBottom) {
            elements[i].classList.add("show");
        } else {
            elements[i].classList.remove("show");
        }
    }
}

function getElementsWithAttribute(attribute) {
    var elements = document.getElementsByTagName('*');
    var matching = [];
    for(var i = 0, n = elements.length; i < n; i++) {
        if(elements[i].getAttribute(attribute) != null)
            matching.push(elements[i]);
    }
    return matching;
}

function scrollToElementById(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function closeMenu() {
    document.getElementById("showmenucheckbox").checked = false;
}

function getScrollPosition() {
    return Math.max(document.body.scrollTop, document.documentElement.scrollTop || 0);
}

function getWindowHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function getPosition(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { left: curleft, top: curtop };
    }
    return undefined;
}

function scrollToMore() {
    scrollToElementById("expertin");
}

function scrollToPortfolio() {
    closeMenu();
    scrollToElementById("portfolio");
}

function scrollToBlog() {
    closeMenu();
    scrollToElementById("blog");
}

function scrollToContact() {
    closeMenu();
    scrollToElementById("contact");
}

function scaleLandingText() {
    var element = document.querySelector('#banner .text');
    if(getScrollPosition() > 0)
        element.classList.add("scale");
    else
        element.classList.remove("scale");
}

window.onload = function() {
    loadImages();
};

window.onscroll = function(){
    fadeInElements();
    scaleLandingText();
};