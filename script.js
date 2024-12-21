document.getElementById("generateBtn").addEventListener("click", fetchRandomCocktail);

async function fetchRandomCocktail() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.drinks) {
            const cocktail = data.drinks[0];

            const cocktailName = cocktail.strDrink;
            const cocktailImage = cocktail.strDrinkThumb;
            const cocktailInstructions = cocktail.strInstructions;
            const ingredients = [];

            for (let i = 1; i <= 15; i++) {
                const ingredient = cocktail[`strIngredient${i}`];
                const measure = cocktail[`strMeasure${i}`];
                if (ingredient) {
                    ingredients.push(`${measure ? measure : ""} ${ingredient}`);
                }
            }

            if (cocktailName) {
                document.getElementById("cocktail-name").innerText = cocktailName;
            } else {
                document.getElementById("cocktail-name").style.display = "none";
            }

            if (cocktailImage) {
                document.getElementById("cocktail-image").src = cocktailImage;
                document.getElementById("cocktail-image").alt = cocktailName;
            } else {
                document.getElementById("cocktail-image").style.display = "none";
            }

            if (cocktailInstructions) {
                document.getElementById("cocktail-instructions").innerText = cocktailInstructions;
            } else {
                document.getElementById("cocktail-instructions").style.display = "none";
            }

            const ingredientsList = document.getElementById("ingredients-list");
            ingredientsList.innerHTML = "";
            if (ingredients.length > 0) {
                ingredients.forEach(ingredient => {
                    const li = document.createElement("li");
                    li.innerText = ingredient;
                    ingredientsList.appendChild(li);
                });
            } else {
                document.getElementById("cocktail-ingredients").style.display = "none";
            }

        } else {
            alert("Sorry, there was an issue fetching the cocktail.");
        }
    } catch (error) {
        console.error("Error fetching the cocktail:", error);
        alert("Sorry, something went wrong. Please try again later.");
    }
}
