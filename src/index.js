const a = ['Script', 'is', 'running!!'];
let index = 0;
const msgEl = document.getElementById('msg');

setInterval(() => {
    msgEl.textContent = a[++index % a.length];
}, 500);
