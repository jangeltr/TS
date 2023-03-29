export abstract class Animal {
    constructor(protected name: string) {}     //si en los argumentos del constructor ponemos "public, protected o private" queda tambien como propiedad

    move() {
        console.log('Moving along!');
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }
}

export class Dog extends Animal {
    constructor(
        name: string,                       //parametro
        public owner: string                //propiedad por tener public
    ) {
        super(name);                        
    }

    woof(times: number): void {
        for (let index = 0; index < times; index++) {
        console.log('woof!');
        }
    }

    move(): void {          //sobreescritura de un metodo de la clase padre
        super.move()        //ejecuto el metodo de la clase padre
        console.log('')     //codigo del metodo de esta clase
    }
}

// const fifi = new Animal('fifi');         //no se puede instancias una clase abstracta
// fifi.move();
// console.log(fifi.greeting());

const cheis = new Dog('cheis', 'nico');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);