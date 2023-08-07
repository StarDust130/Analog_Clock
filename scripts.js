function show_clock(){

    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
    m.style.transform = `rotate(${6* minutes}deg)`;
    s.style.transform = `rotate(${6* seconds}deg)`;

    let sound = new Audio('ticking-clock.mp3')
    sound.play();

}

setInterval(show_clock, 1000);


// Dark Mode
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');


toggle.addEventListener('click', function()  {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'rgb(63, 94, 251)';
        body.style.color = 'black';
        body.style.transition = "2s"
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = "2s" 
    }
    
})