let btn = document.querySelector('#event-btn');
let list = document.querySelector('#list');

btn.onclick = () => {
    list.classList.toggle('active');
}