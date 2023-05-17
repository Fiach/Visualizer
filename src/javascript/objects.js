const addObjectButton       = document.querySelector('#addObject');
const removeObjectButton    = document.querySelector('#removeObject');
const addPropertyButton     = document.querySelector('#addProperty');
const removePropertyButton  = document.querySelector('#removeProperty');
const container             = document.querySelector('#container');
const addReferenceButton    = document.querySelector('#addReference');
const removeReferenceButton = document.querySelector('#removeReference');
const createReferenceButton = document.querySelector('#createReference');
const cloneObjectButton     = document.querySelector('#cloneObject');
let properties              = document.querySelectorAll('.property');


cloneObjectButton.addEventListener('click', () => {
})
removeReferenceButton.addEventListener('click', () => {
    const referenceList = document.querySelector('.references');
    let association;

    if (!referenceList)
        return

    if (referenceList.children.length === 1) {
        association = document.querySelector('.association');

        setTimeout(function () {
            referenceList.parentElement.remove()
            association.remove();
            // add width, add opacity, and slide element in from left
        }, 1000);

        referenceList.parentElement.classList.remove('show');
        association.classList.remove('show');
    } else {
        referenceList.firstElementChild.remove()
    }


})
createReferenceButton.addEventListener("click", () => {

    const association = document.createElement('div');
    association.classList.add('association');
    association.classList.add('listItem');
    association.innerHTML = `--->`

    const item = document.createElement('div');
    item.classList.add('listItem');

    item.innerHTML = `
        <div class="references">
            <div class="reference">
                <label contenteditable="true">Reference</label>
            </div>
        </div>
    `;

    container.prepend(association)
    container.prepend(item);

    setTimeout(function () {
        // add width, add opacity, and slide element in from left
        association.classList.add('show');
    }, 100);

    setTimeout(function () {
        // add width, add opacity, and slide element in from left
        item.classList.add('show');
    }, 400);

})
addReferenceButton.addEventListener("click", () => {

    const referenceList = document.querySelector('.references');

    if (referenceList === null)
        return;

    if (container.firstElementChild.children[0].children.length === 4)
        return;

    let item = document.createElement('div');
    item.classList.add('reference');

    item.innerHTML = `<label contenteditable="true">Reference</label>`;

    setTimeout(function () {
        item.classList.add('show-y-axis');
    }, 1);

    referenceList.prepend(item);

});

// TODO: Refactoring Potential!
addObjectButton.addEventListener("click", () => {
    let item = createListElement();

    container.prepend(item);

    setTimeout(function () {
        // add width, add opacity, and slide element in from left
        item.classList.add('show');
    }, 2);
});
removeObjectButton.addEventListener("click", () => {
    removeFirstListElement();
});
removePropertyButton.addEventListener('click', () => {
    removePropertyItem();
});
addPropertyButton.addEventListener("click", () => {

    const propertyList = document.querySelector('.properties');

    if (propertyList === null)
        return;

    if (container.firstElementChild.children[0].children.length === 6)
        return;

    let item = createPropertyItem();

    setTimeout(function () {
        item.classList.add('show-y-axis');
    }, 1);

    propertyList.prepend(item);
    updateProperties();

});

//TODO: Clear Up this Code (Duplication, Utilities, ect...)
function createListElement() {
    let item = document.createElement('div');
    item.classList.add('listItem');

    item.innerHTML = `
            <div class="properties">
            </div>
            <div class="object">
                <label contenteditable="true">object</label>
                <div></div>
            </div>
    `;
    return item;
}
function createPropertyItem() {
    let item = document.createElement('div');
    item.classList.add('property');

    item.innerHTML = `
            <b contenteditable="true">Prop</b>
    `;

    return item;
}
function removePropertyItem() {

    if (properties.length === 0) {
        console.warn("No Property to Remove");
        return
    }

    properties.item(0).classList.remove('show-y-axis');

    setTimeout(function () {
        properties.item(0).remove();
        updateProperties();
    }, 1);


}
function removeFirstListElement() {
    // get the item to shift
    let shiftItem = container.firstElementChild
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
function updateProperties() {
    properties = document.querySelectorAll('.property');
}