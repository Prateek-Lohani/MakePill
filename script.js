

var tl=gsap.timeline();

tl.from('.left-text',{
    y:100,
    opacity:0,
    delay:1.6,
    duration:.95
})
tl.from('.loadedpercent',{
    opacity:0,
    duration:5.2
})

tl.to('#overlay',{
    display:"none",
})

tl.to('#main',{
    display:"block"
})

tl.from('div h1',{
    y:40,
    opacity:0,
    duration:.4,
    stagger:.2
}
)

tl.from('nav',{
    y:-30,
    opacity:0,
    duration:.6,
    stagger:.2
})

tl.from('.bottompara',{
    opacity:0,
    y:-20,
    delay:.5,
    duration:1.9
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