function simpleLine(div, name, value) {
  var left = document.createElement("div");
  left.className = "left";
  left.innerText = translationUI[name];
  var right = document.createElement("div")
  right.className = "right";
  right.innerText = value;
  div.appendChild(left);
  div.appendChild(right);
}

const propertiesOrder = {
  molarMass: simpleLine,
  hardness: simpleLine,
  shc: simpleLine,
  strength: simpleLine,
 // tags: simpleLine
}
