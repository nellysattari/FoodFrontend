import axios from 'axios';
let recepieUrl = 'http://api.yummly.com/v1/api/recipes?_app_id=6faeb25c&_app_key=9f831bfa2aae088b24f64757ac73b86a';
  

export var getRecepies = () => {
    axios.get(recepieUrl)
       .then(function (response) {
           // handle success  
          showRecepies(response);
       })
       .catch(function (error) {
           // handle error
           console.log(error);
       })
       .then(function () {
           // always executed
       });
};


var showRecepies= (recepieList)=>{
    var foodDiv = '';
    let topItems = [];
    for (var i = 0; i < 3; i++) {
        topItems.push(recepieList.data.matches[i]);
    }
   
    foodDiv += '<div class="card-deck">';
    topItems.forEach((element) => {
        foodDiv += '<div class="card">';
        foodDiv += `<img class="card-img-top" src="${element.imageUrlsBySize[90]}" alt="Card image cap">`;
        foodDiv += '<div class="card-body">';
        foodDiv += `<h5 class="card-title">${element.sourceDisplayName}</h5>`;
        foodDiv += `<p class="card-text">${element.ingredients}</p>`;
        foodDiv += `<p class="card-text"><small class="text-muted">${element.recipeName}</small></p>`;
        foodDiv += '</div>';
        foodDiv += '</div>';
    });
    foodDiv += '</div>';


    var div = document.getElementById('yamly');
    div.innerHTML = foodDiv;
};



