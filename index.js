function scrollBetweenInfo(event){
    event.preventDefault;
    switch(event.target.className){
        case('introduction'):
            if(event.deltaY == 102){
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#works';
            }
            break;
        case('myWorks'):
            if(event.deltaY == 102){
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#feedback';
            }else{
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#intro';
            }
            break;
        case('feedbackForm'):
            if(event.deltaY == -102){
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#works';
            }
            break;
    }
}

const element = document.querySelector('main');
element.onwheel = scrollBetweenInfo;
const images = ["firstPhoto", "secondPhoto", "thirdPhoto", "fourthPhoto", "fifthPhoto", "sixthPhoto"];

function showFullImage(src){
    for(let i = 0; i < images.length; i++){
        document.getElementById(images[i]).hidden = true;
    }
    document.getElementById('photos').style.background = "url('" + src + "') no-repeat center";
    document.getElementById('showButton').hidden = false;
}

function showOtherImages(){
    for(let i = 0; i < images.length; i++){
        document.getElementById(images[i]).hidden = false;
    }
    document.getElementById('photos').style.background = "";
    document.getElementById('showButton').hidden = true;
}

const photos = document.getElementById('photos');

photos.addEventListener('mouseover', function(event){
    if(photos.style.background != ''){
        document.getElementById('showButton').hidden = false;
        photos.style.webkitFilter = "brightness(60%)";
    }
});

photos.addEventListener('mouseout', function(event){
    document.getElementById('showButton').hidden = true;
    photos.style.webkitFilter = "";
});