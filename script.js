const recipeApp = {};
let selectedRecipe = [];
// make API call

recipeApp.getRecipe = () => {
    $("button").click(function() {
        recipeApp.ingredient = $("input").val().toLowerCase();
        recipeApp.url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipeApp.ingredient}`;


        $.ajax({
            url: recipeApp.url,
            method: "GET",
            datatype: "json",
            data: {
                per_page: "3",
            },
        }).then((res) => {
            // console.log(res);
            for (let i = 0; i < 3; i++) {
                // console.log("this is length of needed array", res.meals.length);
                const random = [Math.floor(Math.random() * res.meals.length)];

                const title = res.meals[random].strMeal.toLowerCase();
                const dishImage = res.meals[random].strMealThumb;
                const recipeId = res.meals[random].idMeal;
                recipeApp.getItems(recipeId, title);
            }
        });
        // second call to get recipe by id
        recipeApp.getItems = function(recipeId, title) {
            $.ajax({
                url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
                method: "GET",
                datatype: "json",
                data: {
                    per_page: "3",
                },
            }).then((result) => {
                console.log(result);
                // push all the meal.strMeals to a new array'selectedRecipe'
                let name = result.meals[0].strMeal;
                selectedRecipe.push(name);
                $("section").html("");
                $("#one").append(`${selectedRecipe[0]}`);
                $("#two").append(`${selectedRecipe[1]}`);
                $("#three").append(`${selectedRecipe[2]}`);
            });
        };
    });
};
$(function() {
    recipeApp.getRecipe();
});
