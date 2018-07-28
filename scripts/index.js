
const foodCalories = [
    { "food": "iceCream", "calory": 500, },
    { "food": "roasPumkin", "calory": 300 },
    { "food": "spaghetti", "calory": 400 }
];
let _this;
  
class getReciepes {
    constructor() {
        _this= this ;
      }
    

    static get foodCalories() {
        return  [
            { "food": "iceCream", "calory": 500, },
            { "food": "roasPumkin", "calory": 300 },
            { "food": "spaghetti", "calory": 400 }
        ];
      }
    //   const handleSuccess = (result, callback) => {}
    showcalory(){
        let element= document.querySelectorAll('[data-foo="value"]');
 
    };
    getCalories (foodName){
        console.log(foodName);
        let val = foodCalories.find(x => x.food === foodName).calory;
        console.log(`Calory of ${foodName}:`, val);
        console.log(document.querySelectorAll(`[data-name=${foodName}]`));
        document.querySelectorAll(`[data-name=${foodName}]`)[0].textContent=`calory is ${val}`
        // _this.showcalory();
    };
 
};
// console.log(new getReciepes().getCalories("iceCream"));