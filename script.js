var t1 = gsap.timeline();
gsap.set(".a",{
    opacity:0,
    y:10
})
gsap.set("#right img",{
    opacity:0,
    y:10,
    scale:1.6
})
t1.from("#left",{
    width:0,
    duration:1.5,
    ease:Expo.easeInOut 
})
.from("right",{
    width:0,
    ease:Expo.easeInOut,
    duration:1.5
})
.to(".a",{
    stragger:.1,
    delay:-1,
    opacity:1,
    y:0,
    ease:Expo.easeInOut,
    duration:2
})
.to("#right img",{
    opacity:1,
    delay:-1,
    y:0,
    scale:1,
    ease:Expo.easeInOut,
    duration:2
})

