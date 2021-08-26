window.onwheel = function scrollBetweenInfo(event) {//function that only lets user scroll through full sections
    event.preventDefault;
    //FIX LINKS AFTER GITHUB PAGES DEPLOY
    switch (location.href) {
        case('file:///C:/Users/oaklo/Desktop/SelfEducation/PhotoPortfolio/index.html'):
        case('file:///C:/Users/oaklo/Desktop/SelfEducation/PhotoPortfolio/index.html#intro'):
            if (event.deltaY == 102) {
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#works';
            }
            break;
        case('file:///C:/Users/oaklo/Desktop/SelfEducation/PhotoPortfolio/index.html#works'):
            if (event.deltaY == 102) {
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#feedback';
            } else {
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#intro';
            }
            break;
        case('file:///C:/Users/oaklo/Desktop/SelfEducation/PhotoPortfolio/index.html#feedback'):
            if (event.deltaY == -102) {
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#works';
            }
            break;
    }
};
window.onload = window.onhashchange = function changeHeaderAndFooter() {//changes header/footer according to the section
    //FIX LINKS AFTER GITHUB PAGES DEPLOY
    if (location.href != 'file:///C:/Users/oaklo/Desktop/SelfEducation/PhotoPortfolio/index.html' && location.href != 'file:///C:/Users/oaklo/Desktop/SelfEducation/PhotoPortfolio/index.html#intro') {
        document.querySelector('header').style.background = '#45658A';
    } else {
        document.querySelector('header').style.background = 'transparent';
    }

    if (location.href === 'file:///C:/Users/oaklo/Desktop/SelfEducation/PhotoPortfolio/index.html#feedback') {
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
    }
});

photos.addEventListener('mouseout', function (event) {
    document.getElementById('showButton').hidden = true;
    photos.style.webkitFilter = "";
});