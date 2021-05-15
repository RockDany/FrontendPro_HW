//Задание 1
const MyArray = [];

/*
# - спрашиваем у пользователя 2 операнда (2 промта).*/
const name2 =prompt('Твоё имя', "Name");
const tally = prompt('Сколько тебе лет?', 19);
const bigNumber= prompt('Напиши ...n число', 25);
const discreteLogic = prompt('Напиши true или false', true);
const space = prompt('Ничего не пиши!!!');
const unknown = prompt('Нажми отмена!!!');
const student = prompt('Создаем Объект Студент','Артём');
const ip= prompt('Cоздаем  наш Символ','E3');




const comand = prompt('Команда для преобразования типов -"conversion"', "conversion" )


function conversion(name2,tally,bigNumber,discreteLogic,space,unknown,student,ip){
  MyArray.push(name2, Number(tally),BigInt(bigNumber) ,Boolean(discreteLogic), space, unknown,Object(student), Symbol(ip));
}

if(comand === 'conversion')
{conversion(name2,tally,bigNumber,discreteLogic,space,unknown,student,ip)}



for(i=0;i<=MyArray.length - 1;i++)
{
  console.log(MyArray[i] + ' ' + typeof MyArray[i]);

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