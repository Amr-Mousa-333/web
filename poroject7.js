let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boot = document.getElementById('boot');
let mountains7 = document.getElementById('mountains7');
let novel = document.querySelector('.novel');
window.onscroll = function ()
{
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 1.2 + 'px';
    river.style.top = value * 1 + 'px';  boot.style.top = value * 1 + 'px';
    boot.style.left = value * 1.9 + 'px';
    novel.style.fontSize = value + 'px';
    if (scrollY >= 67) {
            novel.style.fontSize = 67 + 'px';
        novel.style.position = 'fixed';
        if (scrollY >= 442) {
                novel.style.display  = 'none';
        }
        else {
            novel.style.display  = 'block';
        }
        if (scrollY > 127) {
            document.querySelector('main').style.background='aqua'
        }
    }
    }






