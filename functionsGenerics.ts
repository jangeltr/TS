
// function getValue(value: unknown ) {
//   return value;
// }

// function getValue(value: string | number ) {
//   return value;
// }

function getValue<Tipo>(value: Tipo) {      //se pasa un parametro especificando de que tipo es, asi puede recibir de cualquier tipo especificado
    //el codigo ya va de acuerdo al tipo "Tipo"
    return value;
}

getValue<number>(12).toFixed();             //despues del nombre de la funcion va el tipo de dato del valor del parametro
getValue<string>('12').toLowerCase();
getValue<number[]>([11,1,1]).forEach;

/////////////////////////////////

function getValue2<Tipo1, Tipo2>(value1: Tipo1, value2: Tipo2) { 
    //el codigo ya va de acuerdo al tipo "Tipo"
    return value1;
}

getValue2<number, string>(12,"valor").toFixed();           
