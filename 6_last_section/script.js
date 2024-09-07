gsap.to("#page2 h1", {
  transform: "translateX(-135%)",
  scrollTrigger: {
    trigger: "#page2", //pin propery use garda element ko parent lai matra trigger garne
    scroller: "body",
    start: "top 0",
    end: "top -100%",
    scrub: 2,
    pin: true,
    markers: true,
  },
});
