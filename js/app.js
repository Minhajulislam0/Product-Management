const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector('.primary-header')

navToggle.addEventListener('click',() =>{
    primaryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expended', false)
    : navToggle.setAttribute('aria-expended', true)
    primaryNav.toggleAttribute('data-visible')
    primaryHeader.toggleAttribute('data-overlay')
})

// slider function
    const slider = new A11YSlider(document.querySelector('.slider'), {
      adaptiveHeight: true,
      dots: true,
      centerMode: true,
      arrows:false,
      responsive: {
        480: {
          dots: false, // dots enabled 1280px and up
          
        }
      }
    });