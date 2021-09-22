const blob = document.querySelector('.blob')
const redblob = document.querySelector('#redblob')
const redblob2 = document.querySelector('#redblob2')
const darkblob = document.querySelector('#darkblob')
let i = 10

const rotateBlob = () => {
  blob.style.transform = `rotate(${i}deg)`;
  redblob.style.transform = `rotate(${i}deg)`;
  redblob2.style.transform = `rotate(${i}deg)`;
  darkblob.style.transform = `rotate(${i}deg)`;
}

// window.scrollY

const navAbout = document.getElementById('nav-about');
navAbout.addEventListener('click', () => {
  darkblob.scrollIntoView();
});


setInterval(() => i += 10, 500)
setInterval(rotateBlob, 500);