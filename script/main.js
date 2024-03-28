function onChangeSelect(choice) {
  var list = document.getElementById("list");
  list.replaceChildren();
  menuOrder[choice].forEach(subCategory => {
    var title = document.createElement("h3");
    title.textContent = translationUI[subCategory];
    title.dataset.ui = subCategory;
    list.appendChild(title);
    var category = document.createElement("div");
    category.className = "category";
    list.appendChild(category);
    Object.entries(db[choice][subCategory])
  //    .sort((a, b) => a[1].menuOrder != b[1].menuOrder ?
  //      a[1].menuOrder - b[1].menuOrder :
  //      translationTag[a[0]].name.localeCompare(translationTag[b[0]].name))
      .forEach(([tag, _]) => {
        var box = document.createElement("div");
        box.className = "box";
        var img = document.createElement("img");
        img.setAttribute("src", "images/" + tag[0].toUpperCase() + "/" + tag + ".png");
        var d = document.createElement("div");
        d.className = "align";
        var p = document.createElement("p");
        if (translationTag[tag] == null)
          p.textContent = tag;
        else
          p.textContent = translationTag[tag].name;
        p.dataset.tag = tag;
        d.appendChild(p);
        box.appendChild(img);
        box.appendChild(d);
        category.appendChild(box);
        box.addEventListener("click", () => displayProperties(tag, db[choice][subCategory][tag]));
      });
  });
}

var menuOrder = {
  Element: [
    "Solid",
    "Liquid",
    "Gas",
    "Other",
  ],
  Building: [
    "base",
    "oxygen",
    "power",
    "food",
    "plumbing",
    "hvac",
    "refining",
    "medical",
    "furniture",
    "equipment",
    "utilities",
    "automation",
    "conveyance",
    "rocketry",
    "RocketModule",
    "hep",
    "Gravitas",
    "Quest",
  ],
  Food: [
    "Cooked",
    "Raw",
    "Ingredient",
    "Dehydrated",
  ],
  Critter: [
    "Critter",
    "Baby",
    "Egg",
    "Robot",
  ],
  Plant: [
    "Crop",
    "Forage",
    "Decor",
  ],
  Geyser: [
    "Geyser"
  ],
  Space: [
    "HarvestablePOI",
    "Comet",
    "Shower",
    "ArtifactPOI",
  ],
  Equipment: [
    "Clothes",
    "Suit",
    "Worn",
  ],
  Artifact: [
    "Terrestrial",
    "Space",
    "Any",
    "Quest",
  ],
  Misc: [
    "Medicine",
    "Industrial",
    "Other",
    "Quest",
  ],
  NONE: [
    "NONE"
  ]
}

class info {
  tbody;
  add(left, right) {

    this.tbody.appendChild
  };
  constructor(tbody) {
    this.tbody = tbody;
  }
}

function displayProperties(tag, entity) {
  var img = document.getElementById("descimg");
  img.setAttribute("src", "images/" + tag[0] + "/" + tag + ".png");
  var desc = document.getElementById("desc");
  desc.dataset.desc = tag;
  desc.innerHTML = translationTag[tag].desc;
 // Object.entries(propertiesOrder).forEach(([prop, fn]) => {
 //   let value = entity[prop];
 //   if (value != null) {
 //     fn(properties, prop, value);
 //   }
 // });
}

function init() {
  setTranslation("fr").then(() => onChangeSelect("Element"));
}

window.addEventListener('DOMContentLoaded', () => init());


