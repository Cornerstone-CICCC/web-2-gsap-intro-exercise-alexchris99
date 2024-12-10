// PUT YOUR CODE HERE
const boxesTimelines = gsap.timeline()

boxesTimelines
    .from(".red",{top: "-500", left: "-500", duration: .5})
    .from(".green",{top: "-500", right: "-500", duration: .5})
    .from(".blue",{bottom: "-500", right: "-500", duration: .5})
    .from(".yellow",{bottom: "-500", left: "-500", duration: .5})

    .to(".red",{ x: "-100%", left: "100vw", borderRadius: "50%", backgroundColor: "green",duration: 1})
    .to(".green",{ y: "-100%", top: "100vh", borderRadius: "50%", backgroundColor: "blue", duration: 1},"<")
    .to(".blue",{ x: "100%", right: "100vw", borderRadius: "50%", backgroundColor: "yellow", duration: 1},"<")
    .to(".yellow",{y: "100%",bottom:"100vh", borderRadius: "50%", backgroundColor: "red", duration: 1},"<")
    
    .to(".yellow",{x: "-200%", duration: 1},"+=1")
    .to(".red",{x: "100%", duration: 1},"<")
    .to(".green",{x: "200%", duration: 1},"<")
    .to(".blue",{x: "-100%", duration: 1},"<")