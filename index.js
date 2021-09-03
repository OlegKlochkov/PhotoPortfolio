window.onwheel = function scrollBetweenInfo(event) {//function that only lets user scroll through full sections
    event.preventDefault;
    console.log('event fired');
    console.log(event.deltaY);
    switch (location.href) {
        case('https://olegklochkov.github.io/PhotoPortfolio/'):
        case('https://olegklochkov.github.io/PhotoPortfolio/#intro'):
            if (event.deltaY == 102) {
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#works';
            }
            break;
        case('https://olegklochkov.github.io/PhotoPortfolio/#works'):
            if (event.deltaY == 102) {
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#feedback';
            } else {
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#intro';
            }
            break;
        case('https://olegklochkov.github.io/PhotoPortfolio/#feedback'):
            if (event.deltaY == -102) {
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#works';
            }
            break;
    }
};
window.onload = window.onhashchange = function changeHeaderAndFooter() {//changes header/footer according to the section
    if (location.href != 'https://olegklochkov.github.io/PhotoPortfolio/' && location.href != 'https://olegklochkov.github.io/PhotoPortfolio/#intro') {
        document.querySelector('header').style.background = '#45658A';
    } else {
        document.querySelector('header').style.background = 'transparent';
    }

    if (location.href === 'https://olegklochkov.github.io/PhotoPortfolio/#feedback') {
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