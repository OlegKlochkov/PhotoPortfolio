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