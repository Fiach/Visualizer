// get each control button
const pushButton = document.querySelector('#push');
const popButton = document.querySelector('#pop');
const unshiftButton = document.querySelector('#unshift');
const shiftButton = document.querySelector('#shift');
const reverseButton = document.querySelector('#reverse');
const sortButton = document.querySelector('#sort');

const arraySortButton = document.querySelector('#arraySort');

const bubbleSortButton = document.querySelector('#bubbleSort');

// get the ul element for visualized array
const theArrayUl = document.querySelector('ul');

// setup array of items to unshift and push to visualized array
let extraItems = ['Bacon', 'Butter', 'Cereal', 'Coffee', 'Creamer', 'Fruit', 'Mayo', 'Milk', 'Yogurt']


export {
    pushButton,
    popButton,
    theArrayUl,
    extraItems,
    reverseButton,
    shiftButton,
    sortButton,
    unshiftButton,
    bubbleSortButton,
    arraySortButton
}