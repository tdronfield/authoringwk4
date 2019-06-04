(() => {
  //stub
  console.log('fired!');

  //cont is short for constant -> variables that shouldn't change
  const piecesBoard = document.querySelector('.puzzle-pieces'),
        puzzleBoard = document.querySelector('.puzzle-board'),
        puzzleSelectors = document.querySelectorAll('#buttonHolder img'),
        dropZones = document.querySelectorAll('.drop-zone');

  let draggablePieces = piecesBoard.querySelectorAll("img")
  //targetting ONLY piecesBoard instead of whole document

  debugger;

  function switchImage(){
    console.log(this);
// grab the corresponding background img 0, 1, 2, or 3
//and get it from the images folder (backGround1.jpg as an example)
    let bgImage = `images/backGround${this.dataset.puzzleref}`;

// set the bg image style on the dropzone container
    puzzleBoard.style.backgroundImage = `url(${bgImage}`;

    debugger;
  }

  puzzleSelectors.forEach(button => button.addEventListener("click", switchImage));

  //loop through the draggable images
  // this lets us drag stuff => not that hard
  draggablePieces.forEach(piece => {
    piece.addEventListener("dragstart", function(e){
      console.log("draggin...");

      //dataTransfer has two methos, a setter and a getter
      //set data on the drag, retrieve it from the drop
      e.dataTransfer.setData("text/plain", this.id);
    })
  })

  //this is the dragover and drop funtionality => this is for the drop zones
  dropZones.forEach(zone => {
    //allow user to drag over an element
    zone.addEventListener("dragover", function(e){
      e.preventDefault();
      console.log('dragged sumpin over me');
    });

    //allow a user to drop an element
    zone.addEventListener("drop", function(e){
      e.preventDefault();
      console.log("you dropped sumpin on me");

      let draggedElement = e.dataTransfer.getData("text/plain", this.id);
      console.log('you dragged' , draggedElement);

      //add the image to the drop zone, when img is dragged over drop zone it becomes a child of the drop-zone
      e.target.appendChild(document.querySelector(`#${draggedElement}`));
    });
  })
})();
