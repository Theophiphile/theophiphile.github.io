function onChangeSelect(choice) {
  var list = document.getElementById("list");
  list.replaceChildren();
  for (const [subCategory, entities] of Object.entries(db[choice])) {
    var title = document.createElement("h3");
    console.log(translationUI);
    title.textContent = translationUI[subCategory];
    title.dataset.ui = subCategory;
    list.appendChild(title);
    var category = document.createElement("div");
    category.className = "category";
    list.appendChild(category);
    Object.entries(entities)
      .sort((a, b) => translationTag[a[0]].name.localeCompare(translationTag[b[0]].name))
      .forEach(([tag, entity]) => {
        var box = document.createElement("div");
        box.className = "box";
        var img = document.createElement("img");
        img.setAttribute("src", "images/"+ tag[0] + "/" + tag + ".png");
        var d = document.createElement("div");
        d.className = "align";
        var p = document.createElement("p");
        p.textContent = translationTag[tag].name;
        p.dataset.tag = tag;
        d.appendChild(p);
        box.appendChild(img);
        box.appendChild(d);
        category.appendChild(box);
        box.addEventListener("click", () => displayProperties(tag, db[choice][subCategory][tag]));
      });
  }
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
  let properties = document.getElementById("properties");
  properties.replaceChildren();
  var desc = document.createElement("div");
  desc.id = "desc";
  var img = document.createElement("img");
  img.setAttribute("src", "images/" + tag[0] + "/" + tag + ".png");
  var p = document.createElement("p");
  p.dataset.desc = tag;
  p.innerHTML = translationTag[tag].desc;
  desc.appendChild(img);
  desc.append(p);
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");
  let infos = new info(tbody);
  propertiesOrder.forEach((prop) => {
    let value = entity[prop];
    if (value != null) {
      var tr = document.createElement("tr");
      var property = document.createElement("th");
      var v = document.createElement("th");
      property.textContent = prop;
      v.textContent = value;
      tr.appendChild(property);
      tr.appendChild(v);
      tbody.appendChild(tr);
    }
  });
  table.appendChild(tbody);
  properties.appendChild(desc);
  properties.appendChild(table);
}

function init() {
  setTranslation("fr").then(() => onChangeSelect("Element"));
}

window.addEventListener('DOMContentLoaded', () => init());

const propertiesOrder = [
  "molarMass",
  "hardness",
  "shc",
  "strength"
]
