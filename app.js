
let cats = [{
  id: 1,
  name: "Fluffy",
  imgUrl: "http://thecatapi.com/api/images/get?format=src&type=gif",
  happyStatus: "Purrrrrrrr",
  grumpyStatus: "Raaaawr",
  feralStatus: "HIISSSSS",
  goneStatus: "Mr. Fluffy ran away!",
  petCount: 0
},
{
  id: 2,
  name:"Mittens",
  imgUrl: "http://thecatapi.com/api/images/get?format=src&type=gif",
  happyStatus: "PuRuRRRRR",
  grumpyStatus: "GADFASW",
  feralStatus: "HSSSSAAAAT",
  goneStatus: "Mittens left you.",
  petCount: 0
},
{
  id: 3,
  name: "Whiskers",
  imgUrl: "http://thecatapi.com/api/images/get?format=src&type=gif",
  happyStatus: "meeeeow",
  grumpyStatus: "MROWL",
  feralStatus: "HSSSSAAASRWL",
  goneStatus: "Whiskers has run away!",
  petCount: 0
}];

function petCat(catId) {

  let petCount = document.getElementById("petCount" + catId);
  let catStatus = document.getElementById("catStatus" + catId);
  let catButton = document.getElementById("pet" + catId);
  let catPic = document.getElementById("catPic" + catId);
  let catName = document.getElementById("catName" + catId);
  let targetCat = getCatById(catId);

  targetCat.petCount++;
  petCount.innerHTML = targetCat.petCount;
  if (targetCat.petCount > 5) {
    catStatus.innerHTML = targetCat.grumpyStatus;
  }
  if (targetCat.petCount > 9) {
    catStatus.innerHTML = targetCat.feralStatus;
  }
  if (targetCat.petCount > 10) {
    catStatus.innerHTML = targetCat.petCount;
    catButton.disabled = true;
    catPic.src = "";
  }
}

function getCatById(catId) {
  for (var i = 0; i < cats.length; i++) {

    let cat = cats[i];

    if (cat.id == catId) {
      return cat;
    }
  }
}
function treatCat(catId) {
  let petCount = document.getElementById("petCount" + catId);
  let catStatus = document.getElementById("catStatus" + catId);
  let catButton = document.getElementById("pet" + catId);
  let catPic = document.getElementById("catPic" + catId);
  let catName = document.getElementById("catName" + catId);
  let targetCat = getCatById(catId);

  targetCat.petCount = 0;
  petCount.innerHTML = targetCat.petCount;
  catButton.disabled = false;
  catStatus.innerHTML = targetCat.happyStatus;
  catPic.src = targetCat.imgUrl;
}

function drawCats(listOfCats) {

  let template = "";

  for (let i = 0; i < listOfCats.length; i++) {
    var cat = listOfCats[i];
    template += `
  <div>
    <img id="catPic${cat.id}" src="${cat.imgUrl}" alt="">
    <button
      type="button"
      id="pet${cat.id}"
      onclick="petCat(${cat.id})">
      Pet Me</button>
    <button
      type="button"
      onclick="treatCat(${cat.id})">
      Use a Treat</button>
    <h1>Pet Count:</h1>
    <h1
      id="petCount${cat.id}">0</h1>
      <h2>Name:</h2>
    <h2
      id="catName${cat.id}">${cat.name}</h2>  
    <h2
      id="catStatus${cat.id}">${cat.happyStatus}</h2>
  </div>
  `
  }
  document.getElementById("cat-list").innerHTML = template
}

drawCats(cats)