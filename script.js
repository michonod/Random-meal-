const randomMealButton = document.querySelector(".random");

const randomMeal = () => {
  for (let i = 0; i < 4; i++) {
    async function foodApi() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      const element = `<main>
            <img src="${data.meals[0].strMealThumb}" alt="food" />
            <div class="food-info">
              <h3 class="food-name">${data.meals[0].strMeal}</h3>
              <p class="food-price">$15.99</p>
              <p class="food-text">
                  <div class="line"></div>
                ${data.meals[0].strInstructions}
              </p>
            </div>
      </main>`;
      const container = document.querySelector(".container");
      const main = document.createElement("main");
      container.append(main);
      main.innerHTML = element;
    }
    foodApi();
  }
};

randomMealButton.addEventListener("click", randomMeal);
