let header = document.getElementById('header');
header.onscroll = function scroll() {
    header.style.position = 'fixed';
    header.style.backgroundColor = 'white';
    header.style.zIndex = '10';
    header.style.width = '100%';
    header.style.paddingLeft = '200px';
}