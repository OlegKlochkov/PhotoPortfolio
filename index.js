window.onwheel = function scrollBetweenInfo(event) {//function that only lets user scroll through full sections
    event.preventDefault;
    switch (window.location.hash) {
        case(''):
        case('#intro'):
            if (event.deltaY > 0) {
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#works';
            }
            break;
        case('#works'):
            if (event.deltaY < 0) {
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#feedback';
            } else {
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#intro';
            }
            break;
        case('#feedback'):
            if (event.deltaY < 0) {
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#works';
            }
            break;
    }
};
window.onload = window.onhashchange = function changeHeaderAndFooter() {//changes header/footer according to the section
    if (window.location.hash != '' && window.location.hash != '#intro') {
        document.querySelector('header').style.background = '#45658A';
    } else {
        document.querySelector('header').style.background = 'transparent';
    }

    if (window.location.hash === '#feedback') {
        document.querySelector('footer').style.visibility = 'initial';
    } else {
        document.querySelector('footer').style.visibility = 'collapse';
    }
}

const images = ["firstPhoto", "secondPhoto", "thirdPhoto", "fourthPhoto", "fifthPhoto", "sixthPhoto"];

function showFullImage(src) {
    for (let i = 0; i < images.length; i++) {
        document.getElementById(images[i]).hidden = true;
    }
    document.getElementById('photos').style.background = "url('" + src + "') no-repeat center";
    document.getElementById('photos').style.backgroundSize = "contain";
    document.getElementById('showButton').hidden = false;
}

function showOtherImages() {
    for (let i = 0; i < images.length; i++) {
        document.getElementById(images[i]).hidden = false;
    }
    document.getElementById('photos').style.background = "";
    document.getElementById('showButton').hidden = true;
}

const photos = document.getElementById('photos');

photos.addEventListener('mouseover', function (event) {
    if (photos.style.background != '') {
        document.getElementById('showButton').hidden = false;
        photos.style.webkitFilter = "brightness(60%)";
        photos.style.cursor = "pointer";
    }
});

photos.addEventListener('mouseout', function (event) {
    document.getElementById('showButton').hidden = true;
    photos.style.webkitFilter = "";
    photos.style.cursor = "";
});