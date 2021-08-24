function scrollBetweenInfo(event){
    event.preventDefault;
    if(document.getElementById('intro').innerHTML.includes('id="' + event.target.id + '"') || event.target.id === 'intro'){
        if(event.deltaY == 102){
            location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
            location.href = '#works';
            document.querySelector('header').style.background = '#45658A';
        }
    }else{
        if(document.getElementById('works').innerHTML.includes('id="' + event.target.id + '"') || event.target.id === 'works'){
            if(event.deltaY == 102){
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#feedback';
            }else{
                location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                location.href = '#intro';
                document.querySelector('header').style.background = 'transparent';
            }
        }else{
            if(document.getElementById('feedback').innerHTML.includes('id="' + event.target.id + '"') || event.target.id === 'feedback'){
                if(event.deltaY == -102){
                    location.href = '#';//required to work around a bug in WebKit (Chrome / Safari)
                    location.href = '#works';
                }
            }
        }
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

window.onload = window.onhashchange = function () {
    //work around a bug where the header remains transparent after page reload
    //FIX LINKS AFTER GITHUB PAGES DEPLOY
    if (location.href != 'file:///C:/Users/oaklo/Desktop/SelfEducation/PhotoPortfolio/index.html' && location.href != 'file:///C:/Users/oaklo/Desktop/SelfEducation/PhotoPortfolio/index.html#intro') {
        document.querySelector('header').style.background = '#45658A';
        console.log('fixed!')
    }
}