var foodID = sessionStorage.getItem("foodID");
console.log(foodID);

const DETAILS_URL =
  "  https://api.spoonacular.com/recipes/" +
  foodID +
  "/information?apiKey=4a61dda013644470a7be905682ce752f";
const details = document.getElementById("para");
details.innerHTML = "";
fetch(DETAILS_URL)
  .then((response) => response.json())
  .then((responseJson) => {
    var i,
      ingre = "";
    for (i = 0; i < 10; i++) {
      ingre += "<br/>" + responseJson.extendedIngredients[i].aisle;
    }
    var result =
      "<h1 class='header'>Recipes</h1>" +
      "<table><tr><td class='title'>" +
      responseJson.title +
      "</td></tr>" +
      "<tr><td><img src='" +
      responseJson.image +
      "' alt='img' class='image'></td></tr>" +
      "<tr><td><h2>Cooking Instructions</h2></td></tr>" +
      "<tr><td>" +
      responseJson.instructions +
      "</td></tr>" +
      "<tr><td><h2>Ingredients</h2></td></tr>" +
      "<tr><td class='ingredients'>" +
      ingre +
      "</td></tr></table>";

    details.innerHTML = result;
  });
