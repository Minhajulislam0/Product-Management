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