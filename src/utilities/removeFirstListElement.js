import {theArrayUl} from "./setup.js";

function removeFirstListElement() {
    // get the item to shift
    let shiftItem = theArrayUl.firstElementChild
    if (shiftItem !== null) {
        // remove show class
        shiftItem.classList.remove('show');
        // set delay equal to css transition
        setTimeout(function () {
            // remove the list item from DOM
            shiftItem.remove();
        }, 400);
    }
}

export {removeFirstListElement};