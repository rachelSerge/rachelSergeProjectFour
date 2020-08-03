const recipeApp = {};
recipeApp.meals = [];

// reset button: empty user inputs and  warning message

recipeApp.getRecipe = () => {
    $("#reset").click(function() {
        recipeApp.localRecipes = [];
        $(".content").html("");
        $("#warning").html("");
        $("input").val("");
        $(".submit").text("submit");
    });
    // eventListener: once the user clicks the 'submit' button,  if we get more than three results from API, it will generate first three recipes. if less than three, it will generate all the available recipes. if the result is null, throw an erro message

    // this method is better than getting three random recipes from API, we can manipulate the array locally, which is more efficient

    $("#submit").click(function() {
        // note: we have to change all the inputs to lowercase in case of error(if user inputs are uppercase)
        recipeApp.ingredient = $("input").val();
        console.log(recipeApp.ingredient);
        // error catch: if user inputs nothing, throw an error messgae inside of the warning area
        if (recipeApp.ingredient == "") {
            // $("#warning").html("input is empty");
            alert("please make a selection")
        } else {
            // make API call
            recipeApp.url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipeApp.ingredient}`;

            $.ajax({
                url: recipeApp.url,
                method: "GET",
                datatype: "json",
                data: {
                    per_page: "3",
                },
            }).then((res) => {
                // check api result & error handling
                if (res.meals == null) {
                    $(".warning").show();
                }
                // print results if the input is not empty
                else {
                    recipeApp.localRecipes = [];
                    if (res.meals.length >= 3) {
                        recipeApp.localRecipes = res.meals.slice(0, [Math.floor(Math.random() * res.meals.length)]);
                    } else {
                        recipeApp.localRecipes = res.meals;
                    }
                    console.log(recipeApp.localRecipes);

                    // done
                    // get recipes for each meal id
                    for (let i = 0; i < recipeApp.localRecipes.length; i++) {

                        recipeId = recipeApp.localRecipes[i].idMeal;
                        $.ajax({
                            url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
                            method: "GET",
                            datatype: "json",
                            data: {
                                per_page: "3",
                            },
                        }).then((res) => {
                            // create a new array to hold all ingredients

                            res.meals.forEach(function() {
                                res.meals[0].ingredientsList = [];


                                for (num = 1; num <= 20; num++) {
                                    if (res.meals[0][`strIngredient${num}`] && res.meals[0][`strMeasure${num}`]) {
                                        res.meals[0].ingredientsList.push(res.meals[0][`strIngredient${num}`]);
                                        res.meals[0].ingredientsList.push(res.meals[0][`strMeasure${num}`]);
                                        res.meals[0].ingredientsList.push(" |");

                                    }

                                }

                            });
                            console.log(res.meals[0].idMeal);
                            console.log(res.meals[0].strMeal);

                            const recipe = res.meals[0].strInstructions;
                            const title = res.meals[0].strMeal;
                            const dishImage = res.meals[0].strMealThumb;
                            // const recipeId = res.meals[0].idMeal;
                            const ingredients = res.meals[0].ingredientsList.join(" ");

                            // display recipes result to the page.
                            $(".content").html(`
                            <div class="wrapper">
                                <h2>${title}</h2>
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
                            // change text on submit button
                            $(".submit").text("more");
                            // erase 404 message from the body
                            $(".warning").hide();
                        });

                    }
                }
            });
        }
    });
};

$(function() {
    recipeApp.getRecipe();
});