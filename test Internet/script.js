let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('#reload');


window.onload = function () {
    if (window.navigator.onLine) {
        onLine();
    } else {
        offLine();
    }
}
window.addEventListener("online", function () {
    onLine();
})

window.addEventListener("offline", function () {
    offLine();
})



function onLine() {
    title.innerHTML = 'OnLine Now';
    title.style.color = 'green';
    ul.style.display = 'none';
    reload.style.display = 'none';
    // ul.classList.add('hide');
    // reload.classList.add('reload');
}
function offLine() {
    title.innerHTML = 'OffLine Now';
    title.style.color = '#666'
    ul.style.display = 'block';
    reload.style.display = 'block';
    // ul.classList.remove('hide');
    // reload.classList.remove('reload');
}