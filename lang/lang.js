let translations = [
  "fr",
  "en",
]

let translationUI = {};
let translationTag = {};

async function setTranslation(currentTranslation) {
  console.log("await");
  const [responseUI, responseTag] = await Promise.all([
    fetch('lang/' + currentTranslation + '/ui.json'),
    fetch('lang/' + currentTranslation + '/translation.json')
  ]);
  console.log("await");
  translationUI = await responseUI.json();
  translationTag = await responseTag.json();
  console.log("await");
  document.querySelectorAll("[data-ui]").forEach((element) =>
    element.textContent = translationUI[element.dataset.ui]
  );
  document.querySelectorAll("[data-tag]").forEach((element) =>
    element.textContent = translationTag[element.dataset.tag].name
  );
  document.querySelectorAll("[data-desc]").forEach((element) =>
  element.innerHTML = translationTag[element.dataset.desc].desc
);
}

