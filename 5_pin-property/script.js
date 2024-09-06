gsap.to("#page2 img", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page2", //pin effect ma element ko parent lai matra trigger ma rakhne
    scroller: "body",
    markers: true,
    start: "top 0",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
