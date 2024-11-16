/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header');
    // Add a class if the scroll position is greater than or equal to 50
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 100,
  });
  
  sr.reveal('.home-data, .footer');
  sr.reveal('.home-dish', { delay: 300, distance: '100px', origin: 'bottom' });
  sr.reveal('.home-burger', { delay: 900, distance: '100px', duration: 1500 });
  sr.reveal('.home-ingridents', { delay: 1000, interval: 100 });
  sr.reveal('.recipe-img, .delivery-img, .contact-image', { origin: 'left' });
  sr.reveal('.recipe-data, .delivery-data, .contact-data', { origin: 'right' });
  sr.reveal('.popular-card', { interval: 100 });
  