import "./sass/main.scss";
import "./sass/tablet.scss";
import "./sass/phone.scss";
import "./sass/desktop.scss";

const hamburger = document.querySelector("#burgermenu");
const menuList = document.querySelector("#menu");

window.addEventListener("DOMContentLoaded", start);

function start() {
  hamburger.addEventListener("click", mobileMenu);
  gsapAnimations();
}

function mobileMenu() {
  hamburger.removeEventListener("click", mobileMenu);
  menuList.classList.remove("inactive");
  hamburger.classList.add("active");

  hamburger.addEventListener("click", closeMenu);

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((n) => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburger.removeEventListener("click", closeMenu);
    navLinks.forEach((n) => n.removeEventListener("click", closeMenu));
    menuList.classList.add("inactive");
    hamburger.classList.remove("active");
    hamburger.addEventListener("click", mobileMenu);
  }
}
function gsapAnimations() {
  let slideIn = gsap.timeline({
    duration: 1.2,
    scrollTrigger: {
      trigger: "header",
      start: "40%",
      endTrigger: "#introduction",
      end: "30%",

      markers: false,
    },
  });
  slideIn.from("#intro_text_h2", { opacity: 0, x: "5%" });
  slideIn.to("#intro_text_h2", { x: "0%", opacity: 100 });

  let h1Animation = gsap.timeline({
    duration: 1.5,
    // scrollTrigger: {
    //   trigger: "body",
    //   start: "top top",
    //   endTrigger: "header",
    //   end: "20%",
    //   markers: false,
    // },
  });
  h1Animation.from(".bottom_right", { opacity: 0 });
  h1Animation.to(".bottom_right", { opacity: 100 });
}
