let a = 10;
alert(a);
let b = 20;
alert(b);

let year = 'В 2007 году выпустили первый iPhone';
alert(year);

let creator = 'Брендан Эйх - создатель языка JavaScript';
alert(creator);

let c = 10;
let d = 2;
alert (c+d);
alert (c-d);
alert (c*d);
alert (c/d);

let result = 2**5;
alert (result);

let e = 9;
let f = 2;
alert (e%f);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

let age = prompt ('Сколько вам лет?');
alert (age);

let user = {
    name: 'Anna',
    age: 35,
    isAdmin: true
}
user ['city of residence'] = true;
user.age = 40;
delete user ['city of residence'];
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert (user[info]);

let userName = prompt('Как Вас зовут?');
alert(`Привет, ${userName}!`);