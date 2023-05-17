const updateIndexMarkers = () => {
    // get all list items
    let listItems = document.querySelectorAll('.listItem');
    listItems.forEach((item, index) => {
        // get this items child div
        let indexMarker = item.querySelector('div');
        // set div to display the current index
        indexMarker.innerText = `[${index}]`;
    });
};

export {updateIndexMarkers};