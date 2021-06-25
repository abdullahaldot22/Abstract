const container = document.querySelector('.container');
for (var i = 1; i <= 200; i++) {
    const blocks = document.createElement('div')
    blocks.classList.add('block');
    container.appendChild(blocks);
}

function generate() {
    anime({
        targets: '.block',
        translateX: function() {
            return anime.random(-800, 800)
        },
        translateY: function() {
            return anime.random(-800, 800)
        },
        scale: function() {
            return anime.random(0.5, 4)
        }
    });
};

generate();

const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const mer = document.getElementById('mer');
const day = document.getElementById('day');
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
const loc = document.getElementById('loc');
const sym = document.getElementById('sym');
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// document.getElementById('sec').valueOf().innerHTML = (s < 10) ? '0' + sec : sec;

// if (now.getSeconds < 10) {
//     document.getElementById('sec').innerHTML = '0' + `${now.getSeconds()}`;
// };



const now = new Date();

document.getElementById('year').innerHTML = `${now.getFullYear()}`;
document.getElementById('hour').innerHTML = `${now.getHours()}`;
document.getElementById('min').innerHTML = `${now.getMinutes()}`;
document.getElementById('sec').innerHTML = `${now.getSeconds()}`;
document.getElementById('month').innerHTML = `${months[now.getMonth()]}`;
document.getElementById('day').innerHTML = `${days[now.getDay()]}`;
document.getElementById('date').innerHTML = `${now.getDate()}`;
// document.getElementById('loc').innerHTML = `${now.getTimezoneOffset()}`;