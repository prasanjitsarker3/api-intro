const searchFood = () => {
    const searchFeild = document.getElementById("search-field");
    const searchText = searchFeild.value;
    searchFeild.value = '';
    if (searchText == '') {
        //please write something display
        const textShow = document.getElementById("text-show");
        const p=document.createElement("p");
        p.innerText="Please Search Meals Rights Name";
        textShow.appendChild(p);
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))

    }

}
const displaySearchResult = (meals) => {
    const searchResult = document.getElementById('search-result');
    // clear previous searchResult
    // searchResult.innerHTML='';
    searchResult.textContent = '';
    if(meals.length ==0) {
        const textError = document.getElementById("text-wrong");
        const p=document.createElement("p");
        p.innerText="Please Search Again";
        textError.appendChild(p);
        console.log(textError,p);
    }
    
    else{
        meals.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="loadMealDetails('${meal.idMeal}')" class="card ">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
              </div>
            `
            searchResult.appendChild(div);
        })
    }
   

}

const loadMealDetails = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = (meal) => {
    console.log(meal);
    const mealDetail = document.getElementById("meal-detail");
    mealDetail.textContent='';
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
              <a href="${meal.strYouTube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    mealDetail.appendChild(div);
}