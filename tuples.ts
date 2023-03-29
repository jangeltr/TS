const prices: (number | string)[] = [1,3,2,2,2, 'as'];  //array que puede tener elementos de dos tipos
prices.push(1);
prices.push('1');

let user: [string, number, boolean];    //tupla: se especifica el numero de elementos que va a tener y el tipo
user = ['nico', 12, true];

const [username, age] = user;           //Destructuring de una tupla
console.log(username);
console.log(age);