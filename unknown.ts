let anyVar: any;        //Tipo de dato any, se le puede asignar cualquier cosa
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;    //Pero desactiva la revicion de codigo y puede uno 

anyVar.doSomething();           //escribir cualquier cosa sin que marque error de sintaxis
anyVar.touppercase();

//////////////////////////////////////////////////////////////////////////////////

let unknowVar: unknown;     //Tipo de dato unknown, se puede asiganar cualquier cosa
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};


// unknowVar.doSomething();
if (typeof unknowVar === 'string') {    //pero nos obliga a verificar el tipo de dato antes de usar
  unknowVar.toUpperCase();              //y ya verifica la sintaxis obligandonos a usar la variable de acuerdo al tipo de dato asignado
}
if (typeof unknowVar === 'boolean') {
    let isNewV2: boolean = unknowVar;
    console.log(isNewV2)
}

const parse = (str: string): unknown => {
    return JSON.parse(str);
}

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return 'es un string';
    } else if (Array.isArray(input)) {
        return 'es un array';
    }
    throw new Error("")
}