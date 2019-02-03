import {Calories} from './caloryModule';
import {showMagazine} from './magazineModule';
import {getRecepies} from './yamlyRecepiesModule';

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  router
}).$mount("#appTool");


function setup() {
    let getCalories = new Calories();

    document.getElementById('chef').addEventListener('click', function () {
        getRecepies();
    });

    document.getElementById('magazine').addEventListener('click', function () {
        showMagazine();
    });
 
    document.getElementById('iceCream').addEventListener('click', function () {
        getCalories.getCalories(this.getAttribute('data-name'));
    });
    document.getElementById('roasPumkin').addEventListener('click', function () {
        getCalories.getCalories(this.getAttribute('data-name'));
    });
    document.getElementById('spaghetti').addEventListener('click', function () {
        getCalories.getCalories(this.getAttribute('data-name'));
    });
}

setup();


 
    
 

 