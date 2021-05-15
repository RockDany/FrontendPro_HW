//Задание 2 


let x =prompt('Выбери чему будет равен твой X', 20);
let y =prompt('Выбери чему будет равен твой Y', 15);
let question =prompt('Какую операцию хотите сделать?(Сложение, Вычитание, Умножение, Деление, Модуль числа','Сложение');


x=Number(x);
y=Number(y);

console.log(typeof x);
console.log(typeof y);
//# - написать функции для всех операций (сложение, вычитание, умножение, деление, деление по модулю).
//#   Каждая функция считает результат и выводит в консоль "Результат [название операции]: 2+3 = 5",

function Addition(x, y) {
   let z= (x + y);
	console.log("Результат " + z);
}
function Subtraction(x, y) {
	let z=(x - y);
	console.log("Результат " + z);
}
function Multiplication(x, y) {
	let z=(x * y);
	console.log("Результат " + z);
}
function Division(x, y) {
	let z=(x / y);
	console.log("Результат " + z);
}
function Modulus_of_a_number(x, y) {
	let z=(x % y);
	console.log("Результат " + z);
}
switch (question){
  case"Сложение": Addition(x, y);
  break
  case"Вычитание": Subtraction(x, y);
  break
  case"Умножение": Multiplication(x, y);
  break
  case"Деление": Division(x, y);
  break
  case"Модуль числа": Modulus_of_a_number(x, y);
  break
} 