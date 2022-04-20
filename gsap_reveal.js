"use strict";

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.utils.toArray(".reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
      //   onEnterBack: function () {
      //     animateFrom(elem, -1);
      //   },
      //   onLeave: function () {
      //     hide(elem);
      //   }, // assure that the element is hidden when scrolled into view
    });
  });
});

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = direction * 100,
    y = 0;
  if (elem.classList.contains(".fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains(".fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}
