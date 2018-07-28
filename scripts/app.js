import {Calories} from './caloryModule';
import {showMagazine} from './showMagazine';

function setup() {
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
    document.getElementById("chef").addEventListener('click', function () {
        showMagazine();
    });

};

setup();


 
    
 

 