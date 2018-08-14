
export function showMagazine() {
    const foodCalories = [
        { 'name': 'What Chef suggests this week', 'image': 12, 'description': 'Amazing Food' }
       

    ];
    var foodList = '';
    foodCalories.forEach((element) => {
        foodList += '<div class="card mb-12">';
        foodList += '<div class="card-body">';
        foodList += `<h5 class="card-title">${element.name}</h5>`;
        foodList += `<p class="card-text">${element.description}</p>`;
        foodList += '</div>';
        foodList += `<img class="card-img-bottom img-fluid  w-100" style="height:500px ;" src="images/Food${element.image}.jpg" alt="Card image cap">`;
        foodList += '</div>';
    });

    var div = document.getElementById('foolListdiv');
    div.innerHTML = foodList;
}

  