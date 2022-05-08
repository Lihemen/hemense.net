const changing = new Typed("#changing", {
  strings: [
    "I'm Hemense Lan.",
    "I'm a Fullstack Engineer.",
    "I'm a Freelancer.",
  ],
  smartBackspace: true,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: "|",
  autoInsertCss: true,
  stringsElement: null,
  backDelay: 1000,
  typeSpeed: 200,
});

const side_bar_links = document.querySelectorAll(".sidebar__menu__link");
console.log(side_bar_links);
const sections = document.querySelectorAll("section");

// window.addEventListener("scroll", function (e) {
//   sections.forEach((section) => {
//     if (isInViewPort(section)) {
//       console.log(section.id);
//     } else {
//       // section.classList.remove("active");
//     }
//   });
// });

const setActive = (el) => {
  [...el.parentElement.children].forEach((sib) =>
    sib.classList.remove("active")
  );
  el.classList.add("active");
};

const isInViewPort = (el) => {
  const elTop = el.getBoundingClientRect().top;
  const elBottom = elTop + window.innerHeight;
  const vpTop = window.scrollY;
  const vpBottom = window.outerHeight;

  return elBottom > vpTop && elTop < vpBottom;
};
