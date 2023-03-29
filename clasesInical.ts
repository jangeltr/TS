const date = new Date();    //Asi se instancia una clase
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993, 0, 12); // 0 enero 
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

let myVar;

class MyDate {              //declaracion de clase
    year: number | null;    //las propiedades por defecto son publicas
    //private year: number  //propiedad privada
    month: number;
    day: number;
    //read only day: number;    //una vez asignado un valor en el constructor ya no se puede modificar su valor
    private _isBiciesto: boolean;      //a esta variable privada se le antepone "_" para ser utilizada con un getter

    constructor(year: number, month: number, day: number) {
        this.year = year | 2023;    //valor por defecto
        this.month = month;
        this.day = day;
    }
    printFormat(): string {
        return `${this.day}/${this.month}/${this.year}`;
    }
    add(amount: number, type: 'days' | 'months' | 'years') {        //los metodos por defecto son publicos
        if (type === 'days') {
            this.day += amount;
        }
        if (type === 'months') {
            this.month += amount;
        }
        if (type === 'years') {
            if (typeof this.year === 'number')
            this.year += amount;
        }
    }
    private clearDate(): void{      //metodo privado
        console.log('solo prueba')
    }
    get isBiciesto(){                                                     //asi se define el getter de una variable privada
        //puede tener mas codigo                                          //o simplemente para que un metodo sea accedido como una propiedad
        return this._isBiciesto;                                          //siempre debe retornar algo pero no necesariamente la propiedad privada
    }
    set isBiciesto(valor: boolean){                                       //No permite retorno, el tipo de dato del parametro debe ser del mismo de la propiedad
        if (valor)                                                        //Aqui va el codigo de la validacion
            this._isBiciesto=valor
        else
            throw new Error('error')
    }
}

const myDate = new MyDate(2021, 3, 13);
console.log(myDate.printFormat());
myDate.add(3, 'days');
console.log(myDate.printFormat());
myDate.add(1, 'months');
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
console.log(myDate.isBiciesto);                                             //asi se accede a un getter, como una propiedad pero en realidad es un metodo
myDate.isBiciesto = true;                                                   //asi se accede al Setter, pero si la validacion dentro del setter no se cumple lanza exception

console.log(myDate);