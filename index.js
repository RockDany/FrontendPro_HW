//Задание 1
let MyArray = [];

let famyly =String(prompt('Твоё имя', "Name"));
let  tally = Number(prompt('Сколько тебе лет?', 19));
let  bigNumber= BigInt(prompt('Напиши n число', 200109082001090820010));
let  discreteLogic = Boolean(prompt('Напиши true или false', true));
let  ip= Symbol (prompt('Cоздаем  наш Символ','*'));
let  unknown; prompt('Пиши что хочешь!!!');


let  space = prompt('Нажми отмена!!!',''); 



let  student = 
{
	student_name: prompt('Создаем Объект Студент-имя','Артём'),
	student_group: prompt('Создаем Объект Студенгруппа','ІТІНФ-19-3')
};



alert('Твоё имя ' + famyly +' тебе ' + tally + ' лет'  )
alert('Твоё имя ' + student.student_name + ' ты учишься в группе ' + student.student_group )

MyArray.push(famyly,tally,bigNumber,discreteLogic,space,unknown,student,ip);
//Проверка на тип моих данных
	console.log(MyArray);
	console.log(typeof famyly)
	console.log(typeof tally)
	console.log(typeof bigNumber)
	console.log(typeof discreteLogic)
	console.log(typeof space)
	console.log(typeof unknown)
	console.log(typeof student)
	console.log(typeof ip)

//Попробовал работу с циклами 
for( let i=0; i<=MyArray.length ; ++i)
{
  console.log(i+ '. ' +MyArray[i] + ' ' + typeof MyArray[i]);
}





//Задание 2 
let x;
let y;

let question1 =prompt('Выбери чему будет равен твой X', x);
alert('Ты сказал, что твой X' = `${question1}`); 

let question2 =prompt('Выбери чему будет равен твой Y', y);
alert('Ты сказал, что твой Y' = `${question2}`); 

let question3 =prompt('Какую операцию хотите сделать?(Сложение, Вычитание, Умножение, Деление, Модуль числа','Сложение');
alert('Ты выбрал, что будет операция' = `${question3}`); 


x=Number(x);
y=Number(y);

console.log(typeof x);
console.log(typeof y);
//# - написать функции для всех операций (сложение, вычитание, умножение, деление, деление по модулю).
//#   Каждая функция считает результат и выводит в консоль "Результат [название операции]: 2+3 = 5",

function Addition(x, y) {
   return (x+y);
}
function Subtraction(x, y) {
  return(x - y);
}
function Multiplication(x, y) {
  return(x * y);
}
function Division(x, y) {
  return(x/y);
}
function Modulus_of_a_number(x, y) {
  return(x%y);
}
switch (question3){
  case"Сложение": console.log(Addition(x,y))
  break
  case"Вычитание": console.log(Subtraction(x,y))
  break
  case"Умножение": console.log(Multiplication(x,y))
  break
  case"Деление": console.log(Division(x,y))
  break
  case"Модуль числа": console.log(Modulus_of_a_number(x,y))
  break
} 