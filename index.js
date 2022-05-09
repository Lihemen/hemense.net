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

document.querySelector("#age").innerHTML = new Date().getFullYear() - 1999;

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".sidebar__menu__link");
const scroller = document.querySelector("#scrollTop");

links.forEach((link) => {
  link.addEventListener("click", function () {
    if (link.parentElement.classList.contains("active")) {
      return;
    }

    setParentActive(link);
  });
});

window.addEventListener("scroll", function (e) {
  for (let i = 0; i < sections.length; i++) {
    const id = sections[i].id;
    if (isInViewPort(sections[i])) {
      console.log("in view");
      const link = document.querySelector(`a[href="#${id}"]`);
      setParentActive(link);
      if (id !== "") {
        scroller.classList.add("show");
      } else {
        scroller.classList.remove("show");
      }
    }
  }
});

const setParentActive = (el) => {
  [...el.parentElement.parentElement.children].forEach((sib) => {
    sib.classList.remove("active");
  });
  el.parentElement.classList.add("active");
};

const setElActive = (el) => {
  [...el.parentElement.children].forEach((sib) => {
    sib.classList.remove("active");
  });
  el.classList.add("active");
};

const isInViewPort = (el) => {
  var bounding = el.getBoundingClientRect();

  const { top, left, right } = bounding;
  const vpHeight = window.innerHeight;
  const vpWidth = window.outerWidth;
  return left >= 0 && top + 50 <= vpHeight && right <= vpWidth;
};

scroller.addEventListener("click", () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

function alerter(type, message) {
  const markup = `
  <div class="alert">
    <div class="alert__${type}">
      <span class="alert__text">${message}</span>
      <button class="alert__close" style="background: transparent; color: #fff;"><i class="fa-solid fa-close"></i></button>
    </div>
  </div>
`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
}

function addCloser(time = 1500) {
  const my_alert = document.querySelector(".alert");
  const closer = document.querySelector(".alert__close");

  setTimeout(() => my_alert.remove(), time);
  closer.addEventListener("click", () => my_alert.remove());
}

const selectors = document.querySelectorAll(".selectors span");

selectors.forEach((span) => {
  span.addEventListener("click", () => setElActive(span));
});
