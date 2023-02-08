let input = document.querySelector("#input");
let searchBtn = document.querySelector("#search");
let apiKey = "247dab0f-3a5a-4032-b168-ef69c6814ae4";
let notFound = document.querySelector(".not_found");
let defBox = document.querySelector(".def");
let audioBox = document.querySelector(".audio");
let Loading = document.querySelector(".loading");
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //clear old data
  audioBox.innerHTML = "";
  notFound.innerText = "";
  audioBox.innerText = "";
  //get input data
  let word = input.value;
  if (word === "") {
    return alert(`word is required`);
  } else {
    getData(word);
  }
});

async function getData(word) {
  Loading.style.display = "block";
  const reponse = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`
  );
  const data = await reponse.json();
  // if empty result
  if (!data.length) {
    Loading.style.display = "none";
    notFound.innerText = "no result found";
  }
  // if result is suggestions
  if (typeof data[0] === "string") {
    Loading.style.display = "none";
    let heading = document.createElement("h3");
    heading.innerText = "Did you mean?";
    notFound.appendChild(heading);
    data.forEach((element) => {
      let suggestion = document.createElement("span");
      suggestion.classList.add("suggestion");
      suggestion.innerText = element;
      notFound.appendChild(suggestion);
    });
    return;
  }
  //result found
  Loading.style.display = "none";
  let defination = data[0].shortdef[0];
  defBox.innerText = defination;
  // Sound
  const soundName = data[0].hwi.prs[0].sound.audio;
  if (soundName) {
    renderSound(soundName);
  }
  console.log(data);
}

function renderSound(soundName) {
  // https://media.merriam-webster.com/soundc11
  let subfolder = soundName.charAt(0);
  let soundSrc = `https://media.merriam-webster.com/soundc11/${subfolder}/${soundName}.wav?key=${apiKey}`;
  let aud = document.createElement("audio");
  aud.src = soundSrc;
  aud.controls = true;
  audioBox.appendChild(aud);
}
