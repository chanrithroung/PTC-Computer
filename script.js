const show = document.getElementById('open-sidebar');
const sidebar = document.getElementById('sidebar');
const body = document.getElementById("body");


show.addEventListener('click', () => {
    sidebar.style.width=400+'px';
    body.classList.add('dark-body');
    body.style.overflow = "hidden";
});


document.addEventListener('click', (e) => {
    let x = e.clientX;
    if (x > 400) {
        sidebar.style.width = 0;
        body.classList.remove('dark-body');
        body.style.overflow = "scroll";
    }
})




const toggle  = document.querySelector('.toggle');
const ads = document.querySelector('.ads');

toggle.addEventListener('click', ()=> {
    ads.style.display = "none";
});



const countDown = document.getElementById('count-down');


let day = 60;
let hour = 24;
let minute = 30;
let seconds = 50;

setInterval( ()=> {
    if (seconds == 0) {
        minute--;
        seconds = 60;

        if (minute == 0) {
            hour--;
            minute = 60;

            if (hour == 0) {
                day--;
                hour = 24;
            }
        }
    }
    seconds--;
    countDown.innerHTML = `Promotion <span>${day}</span> : <span>${hour}</span> : <span>${minute}</span> : <span>${seconds}</span>`

}, 1000)