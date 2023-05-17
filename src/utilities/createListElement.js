import {extraItems} from "./setup.js";

function createListElement(isTemp) {
    // create new HTML list item
    let item = document.createElement('li');
    item.classList.add('listItem');

    // set inner text to random array item
    if (isTemp)
        item.classList.add('temp')

    item.innerHTML = `
        ${isTemp ? "Temp" : extraItems[Math.floor(Math.random() * extraItems.length)]}
        <div>[-]</div>
    `;

    return item;
}

export {createListElement};