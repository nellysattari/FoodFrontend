import {Calories} from './caloryModule';
import {showMagazine} from './magazineModule';
import {getRecepies} from './yamlyRecepiesModule';

function setup() {
   
    document.getElementById("chef").addEventListener('click', function () {
        getRecepies();
    });

    document.getElementById("magazine").addEventListener('click', function () {
        showMagazine();
    });
    let getCalories = new Calories();
      
    document.getElementById("iceCream").addEventListener('click', function () {
        getCalories.getCalories(this.getAttribute('data-name'));
    });
    document.getElementById("roasPumkin").addEventListener('click', function () {
        getCalories.getCalories(this.getAttribute('data-name'));
    });
    document.getElementById("spaghetti").addEventListener('click', function () {
        getCalories.getCalories(this.getAttribute('data-name'));
    });
};

setup();


 
    
 

 