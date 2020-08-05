const recipeApp = {};
recipeApp.meals = [];

// reset button: empty user inputs and  warning message

recipeApp.getRecipe = () => {
  $("#reset").click(function () {
    recipeApp.localRecipes = [];
    $(".content").html("");
    $("input").val("");
    $(".submit").text("submit");
  });
  // get suggestion cards

  $("#one").on("click", function () {
    let name = $('#one').html();
    $("input").val(`${name}`);
  });
 $("#two").on("click", function () {
  let name = $('#two').html();
  $("input").val(`${name}`);
 });
 $("#three").on("click", function () {
  let name = $('#three').html();
  $("input").val(`${name}`);
 });
 $("#four").on("click", function () {
  let name = $('#four').html();
  $("input").val(`${name}`);
 });
  

  // eventListener: every time user clicks the submit button, it will generate one random recipe based on the user Input

  $("#submit").click(function () {
    recipeApp.ingredient = $("input").val();
    // error catch: if user inputs nothing, throw an error messgae inside of the warning area
    if (recipeApp.ingredient == "") {
      alert("please make a selection");
    } else {
      // make API call based on user input
      recipeApp.url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipeApp.ingredient}`;

      $.ajax({
        url: recipeApp.url,
        method: "GET",
        datatype: "json",
        data: {
          per_page: "3",
        },
      }).then((res) => {
        // shuffle the items inside of res.meals to make sure user get different recipe each time
        function shuffle(newArray) {
          let num1 = newArray.length;
          let num2 = 0;
          let temp;
          while (num1--) {
            num2 = Math.floor(Math.random() * (num1 + 1));
            temp = newArray[num1];
            newArray[num1] = newArray[num2];
            newArray[num2] = temp;
          }
          return newArray;
        }
        // check api result & error handling

        if (res.meals == null) {
          $(".warning").show();
        }
        // print results if the input is not empty
        else if (res.meals != null) {
          let randomNum = shuffle(res.meals);
          recipeApp.localRecipes = res.meals[0];
          // erase 404 message from the body
          $(".warning").hide();
        }

        // get recipes for each meal id
        recipeId = recipeApp.localRecipes.idMeal;
        $.ajax({
          url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
          method: "GET",
          datatype: "json",
          data: {
            per_page: "3",
          },
        }).then((res) => {
          // create a new array to hold all ingredients

          res.meals.forEach(function () {
            res.meals[0].ingredientsList = [];

            for (num = 1; num <= 20; num++) {
              if (
                res.meals[0][`strIngredient${num}`] &&
                res.meals[0][`strMeasure${num}`]
              ) {
                res.meals[0].ingredientsList.push(
                  res.meals[0][`strIngredient${num}`]
                );
                res.meals[0].ingredientsList.push(
                  res.meals[0][`strMeasure${num}`]
                );
                res.meals[0].ingredientsList.push(" |");
              }
            }
          });

          const recipe = res.meals[0].strInstructions;
          const title = res.meals[0].strMeal;
          const dishImage = res.meals[0].strMealThumb;
          const ingredients = res.meals[0].ingredientsList.join(" ");

          // display recipes result to the page.
          // assign id of dynamic content to target for futher duplicate removal
          $(".content").prepend(`
                            <div class="wrapper" id="${title}">
                                <h2 class>${title}</h2>
                                <h3>Ingredients:</h3>
                                <ul>
                                    <li>${ingredients}</li>
                                </ul>
                                <h3>Directions</h3>
                                <div class="recipeWrapper">
                                    <p>${recipe}</p>
                                    <img src="${dishImage}">
                                </div>
                            </div>
                        `);
          console.log(title);
          // change text on submit button
          $(".submit").text("more");

          // removing duplicate recipes from the page
          var duplicateChk = {};
          $("div[id]").each(function () {
            if (duplicateChk.hasOwnProperty(this.id)) {
              $(this).remove();
            } else {
              duplicateChk[this.id] = "true";
            }
          });
        });
      });
    }
  });
};

$(function () {
  recipeApp.getRecipe();
});
