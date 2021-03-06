(() => {
	// set up the puzzle pieces and boards
	//
	// const is short for constant -> variables that shouldn't change
	const piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
		dropZones = document.querySelectorAll(".drop-zones");

	let draggablePieces = document.querySelectorAll(".puzzle-pieces img");



	// arrays are indexed and start at 0
	const imageNameArray = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	//debugger;

	function resetPuzzlePieces(dropZones) {
			console.log("reset!");

			let droppedIn = document.querySelector(".drop-zones img");
			console.log(droppedIn);
			//dropCount = document.querySelector(dropZones.childElementCount);
			//if (dropCount !== "0") {
			//	dropZones.remove(dropZones.children);
			//}
		}




	function switchImage() {
		console.log(this);

		//grab corresponding bg image (0, 1, 2, or 3)
		//and get from images folder (backGround1.jpg as an example)
		let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;

		//set bg image style on dropzone container
		puzzleBoard.style.backgroundImage = `url(${bgImage})`;

		//check for stragglers
		dropZones.forEach(zone => {
			if (zone.childElementCount == 1) { //if drop zone has image..
				piece = zone.firstElementChild; //grab this piece
				piecesBoard.appendChild(piece); //and send it back to the pieces board
			}
		});


  	//work on switching the right-hand images so that they match the buttons at the bottom
  	draggablePieces.forEach((image, index) => {
    //log the img and the current index
    console.log(image,index);

    //change the img source
    image.src = `images/${imageNameArray[index]}${this.dataset.puzzleref}.jpg`;
    //debugger;
  });
}
	//debugger;


	// thumbnail can be changed and reset
	puzzleSelectors.forEach(thumbnail => { thumbnail.addEventListener("click", switchImage) });



	//loop throughout the draggable images
	//draggable function
	//this lets us drag stuff => not that hard
	draggablePieces.forEach(piece => {
		piece.addEventListener("dragstart", function(e) {
			//console.log('draggin...');

			// dataTransfer object has two methods, a seter and getter
			// set data on the drag, and retrieve it on the drop
			e.dataTransfer.setData("text/plain", this.id);
		});
	});


	//this is the dragover and drop functionality => this is for the dropzones
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			//console.log('dragged sumpin over me');
		});

	//allows user to drop element
		zone.addEventListener("drop", function(e) {
			e.preventDefault(); // don't do your default behaviou, instead do ff:

			//console.log('u dropped sumpin on me');
			//debugger;

			//check to see if child element is present on element we're dropping on
			//if it does the function will break with a return statement
			//(nothing past the return line will run)
			if (this.childElementCount == 1) {return;}
			//(this.children.length > 0) is another way of calling the property



			const draggedElement = e.dataTransfer.getData("text/plain");
			//console.log('you dragged:', draggedElement);

			//if the target element does NOT have "0" value (empty), break function.
			if (e.target.childElementCount !== 0) {
				return;
				} else {
				//add image to drop zone when img is dragged over drop zone it becomes a child of the drop zone
				e.target.appendChild(document.querySelector(`#${draggedElement}`));
			}
		});
	})

})();
