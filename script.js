
var tl=gsap.timeline();

tl.from('.left-text',{
    y:15,
    opacity:0,
    delay:1.6,
    duration:.95
})
tl.from('.loadedpercent',{
    opacity:0,
    duration:4.2
})

tl.to('#overlay',{
    display:"none",
})

tl.to('#main',{
    display:"block"
})

tl.from('.herotext h1',{
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
    // delay:.5,
    duration:1.5
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
        loader.style.fontWeight='600';
    }
},65)


var page2=document.querySelector('.page2');
 var crsr=document.querySelector('.crsr');
page2.addEventListener('mouseover',function(){
    page2.style.cursor='pointer';
    crsr.style.display='block';
    
})

crsr.addEventListener('click',function(){
    console.log('clicked');
})

page2.addEventListener('mouseout',function(){
    crsr.style.display='none';
})



document.addEventListener('mousemove',function(det){
  crsr.style.top=`${det.y}px`;
  crsr.style.left=`${det.x}px`;
})