gsap.from('.left-text',{
    y:100,
    opacity:0,
    delay:1.6,
    duration:.95
})
gsap.from('.loadedpercent',{
    opacity:0,
    delay:2.6,
    duration:1.2
})

var loader=document.querySelector('.loadedpercent');
var count=0;
setInterval(function(){
    if(count<100){
        count++;
        loader.textContent = count+'%';
    }
    else{
        loader.textContent = count+'%';
    }
},75)