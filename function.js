let xmark = document.getElementById('xmark');
let bars = document.getElementById('bars');
let menu = document.getElementById('menu');
let body = document.querySelector('body');
  function menuOn() {
  xmark.style.display = 'block';
  bars.style.display = 'none';
  menu.style.left = '0';
  body.style.padding = '20em 10em 0em 0em';
}// TO DO: body.style.transform = 'rotate(0deg)';
function menuOff() {
  xmark.style.display = 'none';
  bars.style.display = 'block';
  menu.style.left = '-130%';
  body.style.padding = '0em';
}
function share() {
  navigator.share({
    title: 'Wellness Warrior Way',
    url: 'https://example.com',
    });
}