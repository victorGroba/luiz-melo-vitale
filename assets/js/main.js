/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  };
  window.addEventListener('scroll', scrollHeader);
  
  /*=============== SWIPER POPULAR ===============*/
  const popularSwiper = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 'auto',
    loop: true,
    pagination: {
      el: ".popular__container .swiper-pagination", // Específico para não conflitar com a home
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });
  
  /*=============== VALUE ACCORDION ===============*/
  const accordionItems = document.querySelectorAll('.value__accordion-item');
  
  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value__accordion-header');
  
    accordionHeader.addEventListener('click', () => {
      const openItem = document.querySelector('.accordion-open');
      toggleItem(item);
  
      if (openItem && openItem !== item) {
        toggleItem(openItem);
      }
    });
  });
  
  const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion-content');
  
    if (item.classList.contains('accordion-open')) {
      accordionContent.removeAttribute('style');
      item.classList.remove('accordion-open');
    } else {
      accordionContent.style.height = accordionContent.scrollHeight + 'px';
      item.classList.add('accordion-open');
    }
  };
  
 
  const sections = document.querySelectorAll('section[id]');
  
  function scrollActive() {
    const scrollY = window.pageYOffset;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');
  
      const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('activate-link');
        } else {
          link.classList.remove('activate-link');
        }
      }
    });
  }
  window.addEventListener('scroll', scrollActive);
  
  /*=============== SHOW SCROLL UP ===============*/ 
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  }
  window.addEventListener('scroll', scrollUp);
  
  /*=============== SCROLL REVEAL ANIMATION ===============*/
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
  });
  
  sr.reveal(`.home__title, .popular__container, .appointment-container, .footer__container`);
  sr.reveal(`.home__description, .footer__info`, { delay: 500 });
  sr.reveal(`.home__search`, { delay: 600 });
  sr.reveal(`.home__value`, { delay: 700 });
  sr.reveal(`.home__images`, { delay: 800, origin: 'bottom' });
  sr.reveal(`.logos__img`, { interval: 100 });
  sr.reveal(`#h1logos`, { delay: 800 });
  sr.reveal(`.value__images, .contact__content`, { origin: 'left' });
  sr.reveal(`.value__content, .contact__images`, { origin: 'right' });
  
  /*=============== SWIPER - HOME SECTION (banner principal) ===============*/
  const homeSwiper = new Swiper(".home__images", {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".home__images .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".home__images .swiper-button-next",
      prevEl: ".home__images .swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  
  /*=============== SWIPERS INTERNOS - POPULAR CAROUSEL ===============*/
  document.querySelectorAll('.popular__carousel').forEach((carousel) => {
    new Swiper(carousel, {
      loop: true,
      nested: true,
      navigation: {
        nextEl: carousel.querySelector('.swiper-button-next-inner'),
        prevEl: carousel.querySelector('.swiper-button-prev-inner'),
      },
    });
  });
  