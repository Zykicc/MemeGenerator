let memeContrainer = document.getElementsByClassName("memeContainer")[0];
let generateBtn = document.getElementById("btn");
let inputTopTxt = document.getElementById("topText");
let inputBottomTxt = document.getElementById("bottomText");
let inputImage = document.getElementById("imageUrl");

generateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputTopTxt.value === "" ||
    inputBottomTxt.value === "" ||
    inputImage.value === ""
  ) {
    alert("Make sure fill all fields");
    return;
  }

  let newMeme = document.createElement("div");
  newMeme.id = "newMeme";

  let topTextElement = document.createElement("div");
  topTextElement.id = "topTextElement";
  topTextElement.innerText = inputTopTxt.value;

  let bottomTextElement = document.createElement("div");
  bottomTextElement.id = "bottomTextElement";
  bottomTextElement.innerText = inputBottomTxt.value;

  memeContrainer.appendChild(newMeme);
  newMeme.appendChild(topTextElement);
  newMeme.appendChild(bottomTextElement);
  newMeme.style.backgroundImage = `url(${inputImage.value})`;

  inputTopTxt.value = "";
  inputBottomTxt.value = "";
  inputImage.value = "";

  newMeme.addEventListener("click", function () {
    newMeme.remove();
  });
});
