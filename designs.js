const canvasInfo = {
    submit: document.querySelector('#sizePicker'),
    canvas: document.querySelector('#pixelCanvas'),
    color: document.querySelector('#colorPicker'),
    gridHeight: document.querySelector('#inputHeight'),
    gridWidth: document.querySelector('#inputWidth'),
    bgfill: function(fill) {
        if (fill.target.nodeName ==='TD') {
            fill.target.style.backgroundColor = canvasInfo.color.value;
        }
    },
};

// Reference https://www.w3schools.com/jsref/prop_color_value.asp
canvasInfo.canvas.addEventListener('click', function(fill) {
    canvasInfo.bgfill(fill)
});

// Reference https://www.w3schools.com/JSREF/event_preventdefault.asp
canvasInfo.submit.addEventListener('submit', function (submit){
    submit.preventDefault();
    makeGrid();
});

// Reference Udacity > Javascript > Lesson 9: Creating Content with JavaScript > 
// Section 2. Updating Existing page Content
// Used nested loops concept found in Javascript > Lesson 4: Loops > Quiz: Find my Seat
// Inserting Rows Reference https://www.w3schools.com/jsref/met_table_insertrow.asp
// Inserting Cells Reference Reference https://www.w3schools.com/jsref/met_tablerow_insertcell.asp
function makeGrid() {
    canvasInfo.canvas.innerHTML = '';

    for (var row = 0; row < canvasInfo.gridHeight.value; row++) {
            pixelTable = canvasInfo.canvas.insertRow(0);

        for (var column = 0; column < canvasInfo.gridWidth.value; column++) {
            pixelTable.insertCell(0);

        }
    }
}