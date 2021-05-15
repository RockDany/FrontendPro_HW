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
