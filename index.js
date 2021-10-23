function changeLocation(id) {
    let parentElementId = window.location.hash != '' ? window.location.hash.replace('#', '') : 'intro';
    if (id !== parentElementId) {
        location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
        location.href = '#' + id;
        document.getElementById(id).style.visibility = 'initial';
        document.getElementById(parentElementId).style.visibility = 'collapse';
    }
}

window.onwheel = function scrollBetweenInfo(event) {//function that only lets user scroll through full sections
    event.preventDefault;
    switch (window.location.hash) {
        case (''):
        case ('#intro'):
            if (event.deltaY > 0) {
                changeLocation('works');
            }
            break;
        case ('#works'):
            if (event.deltaY > 0) {
                changeLocation('feedback');
            } else {
                changeLocation('intro');
            }
            break;
        case ('#feedback'):
            if (event.deltaY < 0) {
                changeLocation('works');
            }
            break;
    }
};

window.addEventListener("keydown", event => {
    if (event.isComposing || event.code === 229) {//required to ignore firing the event during IME composition in firefox 65
        return;
    }
    event.preventDefault;
    switch (window.location.hash) {
        case (''):
        case ('#intro'):
            if (event.code == 'ArrowDown') {
                changeLocation('works');
            }
            break;
        case ('#works'):
            if (event.code == 'ArrowDown') {
                changeLocation('feedback');
            } else {
                if (event.code == 'ArrowUp') {
                    changeLocation('intro');
                }
            }
            break;
        case ('#feedback'):
            if (event.code == 'ArrowUp') {
                changeLocation('works');
            }
            break;
    }
});

window.onbeforeprint = window.onload = window.onhashchange = function loadCurrentLocation() {
    switch (window.location.hash) {
        case ('#works'):
            document.getElementById('works').style.visibility = 'initial';
            document.getElementById('intro').style.visibility = 'collapse';
            break;
        case ('#feedback'):
            document.getElementById('feedback').style.visibility = 'initial';
            document.getElementById('intro').style.visibility = 'collapse';
            break;
    }

    if (window.location.hash === '#feedback') {//footer is only shown in the 'feedback' div
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