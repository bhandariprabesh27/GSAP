gsap.from("#page1 #circle", {
  scale: 0,
  duration: 2,
  rotate: 720,
  dealy: 1,
});
gsap.from("#page2 #circle", {
  scale: 0,
  duration: 2,
  rotate: 720,
  scrollTrigger: {
    trigger: "#page2 #circle",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2, //value of scrub must be either boolean(true/false) or (1-5)
  },
});
gsap.from("#page3 #circle", {
  scale: 0,
  duration: 2,
  rotate: 720,
  scrollTrigger: {
    trigger: "#page3 #circle",
    scroller: "body",
    markers: true,
    start: "top 90%",
    end: "top 50%",
    scrub: 2, //value of scrub must be either boolean(true/false) or (1-5)
  },
});
