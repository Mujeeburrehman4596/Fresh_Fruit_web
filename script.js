

// // navigation 
let menuToogle = document.querySelector('.toogle');
let navigation = document.querySelector('.navigation');

menuToogle.onclick=function(){
    menuToogle .classList.toogle('active');
    navigation .classList.toogle('active');
}
// active class in thumb 

let el = document.querySelectorAll('.thumb li');

for (let i=0;i< el.length; i++){
    el[i].onclick = function(){
        var c=0;
        while (c < el.length){
            el[c++].className ='check';
        }
        el[i].className ='check active';
    }
}

// image change 
function imgSlider(anything){
    document.querySelector('.fruits').src = anything;
}


// change background color 

function changeBgcolor(color){
    const bg = document.querySelector('.bg');
    bg.style.background = color;
}

