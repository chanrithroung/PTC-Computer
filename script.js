const show = document.getElementById('open-sidebar');
const sidebar = document.getElementById('sidebar');
const body = document.getElementById("body");

console.log(body);
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