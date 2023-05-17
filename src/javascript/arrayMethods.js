import {updateIndexMarkers} from "../utilities/updateIndexMarkers.js";
import {createListElement} from "../utilities/createListElement.js";
import {removeFirstListElement} from "../utilities/removeFirstListElement.js";
import {swap} from "../utilities/swap.js";
import {
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
} from "../utilities/setup.js";

// setup event listener for unshift button
unshiftButton.addEventListener("click", () => {
    let item = createListElement();

    // add new list item to start of list
    theArrayUl.prepend(item);
    // Q: Why does the css transition only work with a timeout in place?
    // A: Without delay browser acts like item was created with 'show' class,
    //    so transition does not apply and no animation occurs.
    setTimeout(function () {
        // add width, add opacity, and slide element in from left
        item.classList.add('show');
    }, 1);
    updateIndexMarkers();
});

// setup event listener for shift button
shiftButton.addEventListener("click", () => {
    removeFirstListElement();
    updateIndexMarkers();
});

// setup event listener for push button
pushButton.addEventListener("click", () => {
    // create new HTML list item
    let item = document.createElement('li');
    item.classList.add('listItem', 'rightOrigin');
    // set inner text to random array item
    item.innerHTML = `
  ${extraItems[Math.floor(Math.random() * extraItems.length)]}
  <div></div>
  `;
    // add new list item to end of list
    theArrayUl.append(item);
    // set delay so css transition will apply
    setTimeout(function () {
        // add width, add opacity, and slide element in from right
        item.classList.add('show');
        // remove rightOrigin class so if element is shifted off array it slides out to left
        item.classList.remove('rightOrigin');
    }, 1);
    updateIndexMarkers();
});

// setup event listener for pop button
popButton.addEventListener("click", () => {
    // get item to pop
    let popItem = theArrayUl.lastElementChild
    if (popItem !== null) {
        // add rightOrigin class so elements slides out to right
        popItem.classList.add('rightOrigin');
        // remove show class
        popItem.classList.remove('show');
        // set delay equal to css transition
        setTimeout(function () {
            // remove the list item from DOM
            popItem.remove();
            updateIndexMarkers();
        }, 400);
    }
});

// setup event listener for reverse button
reverseButton.addEventListener("click", () => {
    // get all li items
    const listItems = document.querySelectorAll('.listItem');
    // clear out existing list items
    theArrayUl.innerHTML = ''
    // prepend list items to ul
    listItems.forEach((item) => {
        theArrayUl.prepend(item);
    });

    updateIndexMarkers();
});

// setup event listener for sort button
sortButton.addEventListener("click", () => {
    // get all li items and convert to array
    let listItems = Array.from(document.querySelectorAll('.listItem'));
    // sort listItems alphabetically
    listItems.sort(function (a, b) {
        if (a.innerText < b.innerText) {
            return -1;
        }
        if (a.innerText > b.innerText) {
            return 1;

        }
        return 0;
    });
    // clear out existing list items
    theArrayUl.innerHTML = ''
    // append sorted items to list
    listItems.forEach((item) => {
        theArrayUl.append(item);
    });
    updateIndexMarkers();
});

bubbleSortButton.addEventListener("click", () => {


// Asynchronous BubbleSort function
    async function BubbleSort(delay = 500) {
        var blocks = Array.from(document.querySelectorAll('.listItem'));

        // BubbleSort Algorithm
        for (var i = 0; i < blocks.length; i += 1) {
            for (var j = 0; j < blocks.length - i - 1; j += 1) {

                // To change background-color of the
                // blocks to be compared
                blocks[j].style.backgroundColor = "#FF4949";
                blocks[j + 1].style.backgroundColor = "#FF4949";

                // To wait for 1 sec
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, delay)
                );

                console.log("run");
                var value1 = blocks[j].innerText[0];
                var value2 = blocks[j + 1].innerText[0];

                // To compare value of two blocks
                if (value1 > value2) {
                    await swap(blocks[j], blocks[j + 1]);
                    blocks = document.querySelectorAll(".listItem");
                }

                // Changing the color to the previous one
                blocks[j].style.backgroundColor = "#6b5b95";
                blocks[j + 1].style.backgroundColor = "#6b5b95";
            }

            //changing the color of the greatest element
            //found in the above traversal
            blocks[blocks.length - i - 1]
                .style.backgroundColor = "#13CE66";
        }
    }

// Calling BubbleSort function
    BubbleSort().then(r => updateIndexMarkers());

});

arraySortButton.addEventListener("click", () => {

    let arr = Array.from(document.querySelectorAll('.listItem'));
    // Finding the length of array 'arr'
    let length = arr.length;

    // Sorting using a single loop
    async function arraySort() {
        for (let j = 0; j < length - 1; j++) {

            const value1 = arr[j].innerText[0];
            const value2 = arr[j + 1].innerText[0];

            // Checking the condition for two
            // simultaneous elements of the array
            if (value1 > value2) {
                arr[j].style.backgroundColor = "#FF4949";
                arr[j + 1].style.backgroundColor = "#FF4949";

                // To wait for 1 sec
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 250)
                );

                await swap(arr[j], arr[j + 1]);
                arr = document.querySelectorAll(".listItem");
                // Changing the color to the previous one
                arr[j].style.backgroundColor = "#6b5b95";
                arr[j + 1].style.backgroundColor = "#6b5b95";

                // To wait for 1 sec
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 250)
                );

                //changing the color of the completed element
                arr[j].style.backgroundColor = "#13CE66";
                arr[j + 1].style.backgroundColor = "#13CE66";

                // updating the value of j = -1
                // so after getting updated for j++
                // in the loop it becomes 0 and
                // the loop begins from the start.
                j = -1;


            }
        }
    }

    // Calling ArraySort function
    arraySort().then(r => updateIndexMarkers());

});