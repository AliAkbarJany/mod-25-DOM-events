function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handel blue button
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// green button-----
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// handle by using add EventListener
const seaGreenButton = document.getElementById('make-lightSeaGreen')
seaGreenButton.addEventListener('click', makeSeaGreen)

function makeSeaGreen() {
    document.body.style.backgroundColor = 'LightSeaGreen';
}

// add eventListener
const pinkButton = document.getElementById('make-pink-button');
pinkButton.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'pink';
})