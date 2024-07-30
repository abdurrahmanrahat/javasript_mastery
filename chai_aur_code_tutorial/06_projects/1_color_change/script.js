// const greyEvent = document.getElementById('grey');
// greyEvent.addEventListener('click', () => {
//   document.body.style.backgroundColor = '#ddd';
// });

// const whiteEvent = document.getElementById('white');
// whiteEvent.addEventListener('click', () => {
//   document.body.style.backgroundColor = '#fff';
// });

// const blueEvent = document.getElementById('blue');
// blueEvent.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'blue';
// });

// const yellowEvent = document.getElementById('yellow');
// yellowEvent.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'yellow';
// });

/**********************/

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // if (e.target.id === 'grey') {
        //   body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'white') {
        //   body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'blue') {
        //   body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'yellow') {
        //   body.style.backgroundColor = e.target.id;
        // }
        body.style.backgroundColor = e.target.id;
    });
});
