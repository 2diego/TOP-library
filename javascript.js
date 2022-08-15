let addButton = document.getElementById("add-button");

addButton.addEventListener('click', () => {
  let form = document.getElementById("formSerie");
  form.style.visibility = "visible";
  form.style.position = "sticky";
})

let closeButton = document.getElementById("close-button");

closeButton.addEventListener( 'click', () => {
  let form = document.getElementById("formSerie");
  form.style.visibility = "hidden";
  form.style.position = "absolute";
});

let series = [];
let nameSerie = "";
let linkSerie = "";

// Serie constructor //
function Serie(nameSerie, linkSerie) {
  nameSerie = document.getElementById("nameSerie").value;
  linkSerie = document.getElementById("linkSerie").value;
  this.name = nameSerie;
  this.link = linkSerie;

};

// AddSerie btn //
function newSerie() {
  series.push(new Serie(nameSerie, linkSerie));

  let grid = document.getElementById("main");
  grid.appendChild(document.createElement('div')).innerHTML = document.getElementById("nameSerie").value + "<br>" + document.getElementById("linkSerie").value;

  
  document.getElementById("nameSerie").value = "";
  document.getElementById("linkSerie").value = "";

};


