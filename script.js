function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }

 locomotiveAnimation(); 
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