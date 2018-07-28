

// export class getReciepes {
//     find() {
//     }

// }

const foodCalories = [
    { "food": "iceCream", "calory": 500, },
    { "food": "roasPumkin", "calory": 300 },
    { "food": "spaghetti", "calory": 400 }
];

   
const getCalories = (foodName) => {
    console.log(foodName);
    let val= foodCalories.find(x => x.food === foodName).calory;
    console.log(`Calory of ${foodName}:`,val);
    return val;
};

// console.log(getCalories("iceCream"));