// autotyping Effect

const autodelTEXT = ['Javascript developer','React Developer','Problem Solver'];
const exampleTyping = new AutoTyping('#autodel', autodelTEXT, {
    typeSpeed: 80,
    deleteSpeed: 100,
    waitBeforeDelete: 2000,
    waitBetweenWords: 500,
});
exampleTyping.start()

// //Navabar scrool

let navbar = document.querySelector('.navbar')
window.onscroll = function () {
    if(document.documentElement.scrollTop > 30) {
        navbar.classList.add('navbar-changed')
    }else{
        navbar.classList.remove('navbar-changed')
    }
}

//  popover  myprojects section

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))