// Select color input
const color = document.querySelector('#colorPicker');

// Select size input
const canvasHeight = document.querySelector('#inputHeight');
const canvasWidth = document.querySelector('#inputWidth');
const canvasCanvas = document.querySelector('#pixelCanvas');
const gridSubmit = document.querySelector('#sizePicker');

// Listens for the user to Submit the grid and will clear grid
gridSubmit.addEventListener('submit', function(submit) {
	canvasCanvas.innerHTML = '';
	submit.preventDefault();
	makeGrid();
});

// Changes the color of the Cell
canvasCanvas.addEventListener('click', function(fill) {
	if (fill.target.nodeName === 'TD') {
		fill.target.style.backgroundColor = color.value;
	}
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
	for (var h = 0; h < canvasHeight.value; h++) {
		const height = canvasCanvas.insertRow(0);

		for (var w = 0; w < canvasWidth.value; w++) {
			height.insertCell(0);
		}
	}
}