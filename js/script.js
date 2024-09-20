const header = document.querySelector('h1');
const paragraph = document.querySelector('p:nth-child(2)')
// console.log(header.innertext);
// console.log(paragraph.innertext);
const image = document.querySelector('#main-image');
const noteOutput = document.querySelector('.output');
const timerDisplay = document.querySelector('#time');
const timerBtn = document.querySelector('#start-btn');

header.classList.add('crazy');

header.style.textDecoration = 'underline';

// console.log(document.children[0].children[1].children[0].innertext);
// image.setAttribute('src', 'https://images.pexels.com/photos/16112572/pexels-photo-16112572/free-photo-of-view-of-sun-shining-between-the-trees-in-a-park.jpeg')


// Insert a new article element into the output section
noteOutput.insertAdjacentHTML('beforeend', `
  <article>
    <h3>New note text</h3>
    <p>Added on: 09/09/2024</p>
  </article>
`);

// noteOutput.innerHTML('beforeend', `
//   <article>
//     <h3>New note text</h3>
//     <p>Added on: 09/09/2024</p>
//   </article>
// `);

// Timers This below is called a call back function. We're passing in a Call back
// setTimeout(function () {
//   console.log('time up!'); 
// }, 3000);
let count = 10;
let started = false;

// const timer = setInterval(function (){
//   count--;
//   console.log(count);

//   if (count <= 0){
//     clearInterval(timer)
//   }
// }, 1000);

//load into browser

timerBtn.addEventListener('click', function() {
  if (!started) {
    const timer = setInterval(function () {
      count--;
    
      timerDisplay.innerText  = 'Time: ' + count;
    
        if (count <= 0){
          clearInterval(timer);

          timerDisplay.innerText = 'Time: 10';
          count = 10;
          started = false;
        }
      }, 300);

      started = true;
  }
});