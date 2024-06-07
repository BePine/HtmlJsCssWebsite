function startingMainFunc() {
    var element = document.getElementById("main");
    var containerElements = document.getElementsByClassName("container");
    var thirdContainer = document.getElementById("third")
    var thirdTextBlocks = [];

    for (var i = 0; i < containerElements.length; i++) {
        containerElements[i].classList.toggle("hidden")
        containerElements[i].classList.toggle("shown")

    }
    var textBlocksElements = document.getElementsByClassName("textBlocks");
    for (var i = 0; i < textBlocksElements.length; i++) {

        if (thirdContainer.contains(textBlocksElements[i])) {
            thirdTextBlocks.push(textBlocksElements[i]);
        }
        else {
            textBlocksElements[i].classList.toggle("hidden")
            textBlocksElements[i].classList.toggle("shown")
        }
    }
    setTimeout(() => { applyToThirdContainer(thirdTextBlocks); }, 800)
    element.classList.add("after");

}
function applyToThirdContainer(thirdTextBlocks) {
    for (var i = 0; i < thirdTextBlocks.length; i++)
{

    thirdTextBlocks[i].classList.toggle("hidden")
    thirdTextBlocks[i].classList.toggle("shown")
}
}
