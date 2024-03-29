function simpleLine(unit) {
  return (div, name, value, icon = null) => {
    var prop = document.createElement("div");
    var left = document.createElement("div");

    left.className = "propLeft";
    if (translationUI[name]) {
      left.innerText = translationUI[name];
    }
    else if (translationTag[name]) {
      left.innerText = translationTag[name].name;
    }
    else {
      left.innerText = name;
    }
    if (icon) {
      var img = document.createElement("img");
      img.src = icon.path;
      left.insertAdjacentElement("afterbegin", img);
      left.style.display = "flex";
      left.style.justifyContent = "space-between";
    }
    var right = document.createElement("div");
    right.className = "propRight";
    unit(right, value);
    prop.appendChild(left);
    prop.appendChild(right);
    div.appendChild(prop);
  }
}

function getElementsByTag(tag) {
  var list = [];
  Object.entries(db.Element.Solid).forEach(([elementName, element]) => {
    if (element.tags.includes(tag)) {
      list.push(elementName);
    }
  });
  return list;
}

function summaryLine(div, name, value) {
  var prop = document.createElement("div");
  var left = document.createElement("details");
  var summary = document.createElement("summary");
  left.appendChild(summary);
  if (translationUI[name]) {
    summary.innerText = translationUI[name];
  }
  else {
    summary.innerText = translationTag[name].name;
  }
  getElementsByTag(name).forEach(element => {
    var line = document.createElement("div");
    line.textContent = translationTag[element].name;
    line.classList = "detailsLeft";

    var img = document.createElement("img");
    img.src = image(element).path;
    line.insertAdjacentElement("afterbegin", img);
    line.style.display = "flex";
    line.style.justifyContent = "space-between";
    left.appendChild(line);
  });
  var right = document.createElement("div");
  right.className = "propRight";
  right.innerText = value;
  prop.appendChild(left);
  prop.appendChild(right);
  div.appendChild(prop);
}

function recipeBuilding(div, name) {
  var title = document.createElement("h3");
  title.textContent = "Building Materials";
  div.appendChild(title);
  recipes.Building.forEach(value => {
    if (value.dest == name) {
      Object.entries(value.origin).forEach(([origin, amount]) => {
        if (getElementsByTag(origin).length <= 1) {
          simpleLine(type.kg)(div, origin, amount, image(origin));
        }
        else {
          summaryLine(div, origin, amount + " kg")
        }
      });
    }
  });
}


// const type = {
//   none: (value) => value,
//   kg: (value) => value + " kg",
//   dtugc: (value) => value + " (DTU/g)/°C",
// }

const type = {
  none: (div, value) => {
    var v = document.createTextNode(value);
    div.appendChild(v);
  },
  kg: (div, value) => {
    var v = document.createTextNode(value + " kg");
    div.appendChild(v);
  },
  dtugc: (div, value) => {
    var v = document.createElement("span");
    v.textContent = fuuuuuuurenheit(value);
    v.dataset.pouet = value;
    var text = document.createTextNode(" (DTU/g)/");
    var unit = document.createElement("span");
    unit.dataset.degtext = "";
    unit.textContent = currentDegree;
    div.appendChild(v);
    div.appendChild(text);
    div.appendChild(unit);
  }
}

var currentDegree = "°C";

function convertDegree(degree) {
  return (() => {
    switch (currentDegree) {
      case "°C":
        return degree;
      case "K":
        return degree * 9 / 5 + 32;
      case "°F":
        return degree + 273.15;
    }
  })().toFixed(3)
}

function fuuuuuuurenheit(degree) {
  return (() => {
    switch (currentDegree) {
      case "°C":
      case "K":
        return degree;
      case "°F":
        return degree / 9 * 5;
    }
  })().toFixed(3)
}

function selectDegree(degree) {
  currentDegree = degree;
  document.querySelectorAll("[data-degtext]").forEach(element =>
    element.textContent = degree
  );
  document.querySelectorAll("[data-deg]").forEach(element =>
    element.textContent = convertDegree(element.dataset.deg)
  );
  document.querySelectorAll("[data-pouet]").forEach(element =>
    element.textContent = fuuuuuuurenheit(element.dataset.pouet)
  );
}

function image(tag) {
  return { path: "images/" + tag[0].toUpperCase() + "/" + tag + ".png" };
}

const propertiesOrder = {
  molarMass: simpleLine(type.kg),
  hardness: simpleLine(type.none),
  shc: simpleLine(type.dtugc),
  strength: simpleLine(type.none),
  mass: simpleLine(type.kg),
  flow: simpleLine(type.none),
  maxCompression: simpleLine(type.none),
  viscosity: simpleLine(type.none),
  minHorizontalFlow: simpleLine(type.none),
  minVerticalFlow: simpleLine(type.none),
  radiationAbsorptionFactor: simpleLine(type.none),
  thermalConductivity: simpleLine(type.none),
  massPerUnit: simpleLine(type.none),
  chunkMass: simpleLine(type.none),
  locationRule: simpleLine(type.none),
  rotations: simpleLine(type.none),
  notInRocket: simpleLine(type.none),
  onlyInRocket: simpleLine(type.none),
  generatorWattageRating: simpleLine(type.none),
  battery: simpleLine(type.none),
  externalHeat: simpleLine(type.none),
  internalHeat: simpleLine(type.none),
  width: simpleLine(type.none),
  height: simpleLine(type.none),
  invincible: simpleLine(type.none),
  hp: simpleLine(type.none),
  lowTempWarning: simpleLine(type.none),
  lowTempFatal: simpleLine(type.none),
  highTempWarning: simpleLine(type.none),
  highTempFatal: simpleLine(type.none),
  transparent: simpleLine(type.none),
  repairable: simpleLine(type.none),
  breakable: simpleLine(type.none),
  floodThreshold: simpleLine(type.none),
  entombable: simpleLine(type.none),
  disinfectable: simpleLine(type.none),
  decor: simpleLine(type.none),
  decorRadius: simpleLine(type.none),
  primaryElement: simpleLine(type.none),
  clearable: simpleLine(type.none),
  surfaceArea: simpleLine(type.none),
  thickness: simpleLine(type.none),
  groundTransferScale: simpleLine(type.none),
  maxRadiation: simpleLine(type.none),
  age: simpleLine(type.none),
  batteryLoss: simpleLine(type.none),
  caloriesMax: simpleLine(type.none),
  caloriesLoss: simpleLine(type.none),
  minLight: simpleLine(type.none),
  carryAmount: simpleLine(type.none),
  destroyOnDamaged: simpleLine(type.none),
  deconstructable: simpleLine(type.none),
  enableable: simpleLine(type.none),
  providesO2: simpleLine(type.none),
  launchRate: simpleLine(type.none),
  radboltDecay: simpleLine(type.none),
  radboltStorage: simpleLine(type.none),
  allowBabies: simpleLine(type.none),
  workTime: simpleLine(type.none),
  lauchSpeed: simpleLine(type.none),
  rotationSpeed: simpleLine(type.none),
  rangeMax: simpleLine(type.none),
  rangeMin: simpleLine(type.none),
  scanningAngle: simpleLine(type.none),
  maxAngle: simpleLine(type.none),
  scanLeft: simpleLine(type.none),
  scanRight: simpleLine(type.none),
  mode: simpleLine(type.none),
  numCapsules: simpleLine(type.none),
  numParticlesToOpen: simpleLine(type.none),
  milkConsummer: simpleLine(type.none),
  lightRange: simpleLine(type.none),
  lightAngle: simpleLine(type.none),
  lightDirection: simpleLine(type.none),
  lightShape: simpleLine(type.none),
  spacePerCritter: simpleLine(type.none),
  incubationRate: simpleLine(type.none),
  timeWaitPlantSeed: simpleLine(type.none),
  timeWaitClimbTree: simpleLine(type.none),
  friends: simpleLine(type.none),
  happy: simpleLine(type.none),
  glum: simpleLine(type.none),
  miserable: simpleLine(type.none)
}


