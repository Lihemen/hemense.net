const changing = new Typed('#changing', {
  strings: [
    "I'm Hemense Lan.",
    "I'm a Frontend Developer.",
    "I'm a Freelancer.",
    "I'm open to Remote work.",
  ],
  smartBackspace: true,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
  stringsElement: null,
  backDelay: 1000,
  typeSpeed: 200,
});

const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.sidebar__menu__link');
const scroller = document.querySelector('#scrollTop');

links.forEach((link) => {
  link.addEventListener('click', function () {
    if (link.parentElement.classList.contains('active')) {
      return;
    }

    setParentActive(link);
  });
});

window.addEventListener('scroll', function (e) {
  for (let i = 0; i < sections.length; i++) {
    const id = sections[i].id;
    if (isInViewPort(sections[i])) {
      const link = document.querySelector(`a[href="#${id}"]`);
      setParentActive(link);
      if (id !== '') {
        scroller.classList.add('show');
      } else {
        scroller.classList.remove('show');
      }
    }
  }
});

const setParentActive = (el) => {
  [...el.parentElement.parentElement.children].forEach((sib) => {
    sib.classList.remove('active');
  });
  el.parentElement.classList.add('active');
};

const setElActive = (el) => {
  [...el.parentElement.children].forEach((sib) => {
    sib.classList.remove('active');
  });
  el.classList.add('active');
};

const isInViewPort = (el) => {
  var top = el.getBoundingClientRect().top;
  const vpHeight = window.innerHeight;

  return top + 200 <= vpHeight;
};

scroller.addEventListener('click', () => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
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
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
}

function addCloser(time = 1500) {
  const my_alert = document.querySelector('.alert');
  const closer = document.querySelector('.alert__close');

  setTimeout(() => my_alert.remove(), time);
  closer.addEventListener('click', () => my_alert.remove());
}

const selectors = document.querySelectorAll('.selectors span');

selectors.forEach((span) => {
  span.addEventListener('click', () => {
    setElActive(span);
    const filter = span.getAttribute('data-filter');

    const works = document.querySelectorAll('.portfolio__grid .col');

    works.forEach((work) => {
      if (filter !== '' && work.getAttribute('data-filter') !== filter) {
        work.style.display = 'none';
      } else {
        work.style.display = 'block';
      }
    });
  });
});

function populateWorks() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './works.json');
  xhr.send(null);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const works = JSON.parse(xhr.responseText);
      const portfolio_grid = document.querySelector('.portfolio__grid');

      works.forEach((work) => {
        portfolio_grid.innerHTML += `
        <div class="col" data-filter=${work.tag}>
          <img src=${work.image} alt=${work.title} />
          <a class="overlay" href=${work.link} target="_blank" rel="noreferre noopener">
            <i class="fa-solid fa-eye"></i>
            <p>${work.title}</p>
          </a>
        </div>
        `;
      });
    }
  };
}

populateWorks();

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
});
