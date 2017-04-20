let counter = 0;

function petCat() {
  counter++;
  document.getElementById("petCount").innerText = counter;
  if (counter > 5) {
    document.getElementById("catStatus").innerText = "RAWR! You got scratched.";
  }
  if (counter > 9) {
    document.getElementById("catStatus").innerText = "HISSSSS";
  }
  if (counter > 10) {
    document.getElementById("catStatus").innerText = "The cat has had ENUFF!(he ran)";
    document.getElementById("pet").disabled = true;
    document.getElementById("catPic").src="http://www.barebooks.com/wp-content/uploads/2013/10/GM05.gif"
  }
}

function treatCat() {
  counter = 0;
  document.getElementById("petCount").innerText = counter;
  document.getElementById("pet").disabled = false;
  document.getElementById("catStatus").innerText = "The cat seems Happy, for now....";
  document.getElementById("catPic").src="http://www.cats.org.uk/uploads/images/pages/photo_latest14.jpg"
}