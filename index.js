const API_KEY = "4a61dda013644470a7be905682ce752f";

function fun1() {
  const input = document.getElementById("input").value;
  const RECIPE_URL =
    " https://api.spoonacular.com/recipes/complexSearch?query=" +
    input +
    "&apiKey=4a61dda013644470a7be905682ce752f";
  const recipeEl = document.getElementById("recipe-list");
  recipeEl.innerHTML = "";
  fetch(RECIPE_URL)
    .then((response) => response.json())
    .then((responseJson) => {
      var i;
      var finalResult =
        "<h1 class='heading'>We offer the recipes for these foods</h1><table><tr class='row'>";
      for (i = 0; i < responseJson.number; i++) {
        if (i % 3 == 0) {
          finalResult += "</tr>";
          finalResult += "<tr class='row'>";
        }
        finalResult +=
          "<td><div class='mydiv' id='" +
          i +
          "'><img src='" +
          responseJson.results[i].image +
          "'alt='img' class='img'><p class='paragh'>" +
          responseJson.results[i].title +
          "</p></div></td>";
      }
      finalResult += "</tr></table>";
      recipeEl.innerHTML = finalResult;

      $(".mydiv").click(function (event) {
        var id = $(this).attr("id");
        var foodID = responseJson.results[id].id;
        console.log(foodID);
        sessionStorage.setItem("foodID", foodID);
        window.location.href = "details.html";
      });
    });
}
