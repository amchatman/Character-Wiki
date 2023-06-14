const navButton = document.getElementById('nav-button');
const navMenu = document.getElementById('nav-menu');

navMenu.classList.add('hidden');

navButton.addEventListener('click', function(){
    navMenu.classList.toggle('hidden')

})

console.log("hello");