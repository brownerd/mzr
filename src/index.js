module.exports = () => {
  // Get element with mzr data attribute
  const elem = document.querySelector("[data-mzr]");

  if (elem == null) {
    return;
  } else {
    // Get the textContent and turn it into an array
    const mzrText = elem.textContent.split("");
    // Get the dataset value
    const mzrTargets = elem.dataset.mzr
      // split it on the forward slash to get the break point values
      .split("/")
      // Reverse the order of the array because we want to add
      // the markers in from greatest to least or else
      // we keep making our text grow by one character, thus throwing off
      // the correct positon of the pipe markers
      .reverse();

    // forEach over each value in the range
    mzrTargets.forEach(rangeIndex => {
      // Splice in a pipe character at each position in the range
      mzrText.splice(rangeIndex, 0, "|");
    });

    const mzrBreaks = mzrText
      // join the array in to a string including the added pipe characters
      .join("")
      // then spit it on the pipe characters to get each segment
      .split("|");

    const mzrFormated = mzrBreaks
      .map(
        (currElement, index) =>
          `<span style="background-color: hsl(${((index + 1) /
            mzrBreaks.length) *
            360 +
            240}, 100%, 50%); color: black;">${currElement}</span>`
      )
      .join("");

    elem.innerHTML = mzrFormated;

    // console.log(mzrFormated);
  }
};
