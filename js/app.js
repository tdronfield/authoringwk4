(() => {
  // stub
  console.log('fired!');

  // variables at the top
  let headline = document.querySelector('h1'),
      subhead = document.querySelector('h3'),
      theButton = document.querySelector("button");

  // functions in the middle (what do you want to have happen)
  function changeText() {
      headline.textContent = "Now I'm Different!";
      subhead.textContent = "Hey me too. But that's okay.";
  }

  // function calls / event handling
  theButton.addEventListener("click", changeText);
})();
