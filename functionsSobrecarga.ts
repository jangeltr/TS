//sobrecarga en funciones

function parseStr(input: string | string[]): string | string[] {    //es una sola funcion que puede recir un parametro de un tipo o otro 
    if (Array.isArray(input)) {                                     //y retornar tambien un dato de uno de dos tipos
      return input.join(''); // string
    } else {
      return input.split(''); // string[]
    }
}

const rtaArray = parseStr('Nico');

if (Array.isArray(rtaArray)) {          //se verifica si retorna un arreglo
    rtaArray.reverse();
}
console.log('rtaArray', 'Nico =>' ,rtaArray);

const rtaStr = parseStr(['N','i','c','o']);

if (typeof rtaStr === 'string') {       //se verifica si retorna un string
    rtaStr.toLowerCase();
}
console.log('rtaStr', "['N','i','c','o'] =>",rtaStr);


//otra forma de hacerlo

export function parseStr2(input: string): string[]      //Una funcion se exporta de las 3 formas
export function parseStr2(input: string[]): string
export function parseStr2(input: string | string[]): string | string[] {    //es una sola funcion que puede recir un parametro de un tipo o otro 
    if (Array.isArray(input)) {                                             //y retornar tambien un dato de uno de dos tipos
      return input.join(''); // string
    } else {
      return input.split(''); // string[]
    }
}

const rtaArray2 = parseStr2('Nico')

rtaArray2.reverse();                        //Ya no es necesario verificar el tipo de dato

console.log('rtaArray', 'Nico =>' ,rtaArray2);

const rtaStr3 = parseStr2(['N','i','c','o']);

rtaStr3.toLowerCase();

console.log('rtaStr', "['N','i','c','o'] =>",rtaStr3);