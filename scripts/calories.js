
const foodCalories = [
    { "food": "iceCream", "calory": 500, },
    { "food": "roasPumkin", "calory": 300 },
    { "food": "spaghetti", "calory": 400 }
];
  
  
class getReciepes {
    
    getCalories (name){
        let val ;
        foodCalories.forEach((element, index) => {
            if(element.food === name) {
                val = element.calory;
            }
        });
        console.log(`Calory of ${name}:`, val);
        document.querySelectorAll(`[data-name=${name}]`)[0].textContent=`calory is ${val}`
        return val;
    };
 
};

let getReciepe = new getReciepes();
 
 
   