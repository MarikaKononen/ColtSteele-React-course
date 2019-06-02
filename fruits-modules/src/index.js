
import fruits from './foods';
import {choice, remove} from './helpers'


console.log(fruits);
let randomFruit = choice(fruits);
remove(fruits, randomFruit);
let fruitsLeft = fruits;
console.log(`I'd like one ${randomFruit} please.`);
console.log(`Here you go: ${randomFruit}`);
console.log("Delicious! May I have another?");
console.log(`I'm sorry, we're all out. We have ${fruitsLeft.length} other fruits left.`);
