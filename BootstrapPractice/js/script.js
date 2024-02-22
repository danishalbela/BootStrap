// autoplaying effects
const autodelTEXT = ['Javascript developer','React developer','Problem Solving'];
const exampleTyping = new AutoTyping('#autodel', autodelTEXT, {
    typeSpeed: 50,
    deleteSpeed: 50,
    waitBeforeDelete: 2000,
    waitBetweenWords: 500,
});
exampleTyping.start()

// Navbar scrool

let navbar = document.querySelector('.navbar')
window.onscroll =function()
{
    if(document.documentElement.scrollTop>30)
    {
        navbar.classList.add('navbar-changed')
    }
    else{
        navbar.classList.remove('navbar-changed')
    }
}