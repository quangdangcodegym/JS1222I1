let numbers = [5,1,7];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

let [number1, number2, number3] = numbers;


console.log("Destructoring array.......");
console.log(number1);
console.log(number2);
console.log(number3);

let obj = {
    id: 1,
    name: "Quang Dang"
};
console.log("Destructoring object.......");
let {id, name} = obj;

console.log(id);
console.log(name);