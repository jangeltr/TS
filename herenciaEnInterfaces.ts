interface interface1 {
    title: string,
    subtitle: string
    atrib3: number
}


interface interface2 extends interface1{ //tendra los atributos de la interface1 mas estos
    atrib1: number,
    atrib2: string
}

interface interface3 extends Omit<interface1, 'subtitle' | 'atrib3'>{ //hereda de interface1 todo excepto los atributos especificados
    descripcion: string
}

interface interface4 extends Pick<interface1, 'title'>{     //hereda de interface1 solo los atributos especificados
    descripcion: string
}

interface interface5 extends Partial<interface1>{   //Pone todos los atrtibutos heredados como opcionales
    price: number
}

///////////////////////

interface interface6 extends Readonly<Partial<interface1>>{}    //aqui se hereda de interface1 los atributos como opcionales pero de solo lectura

const funcion1 = (dato: interface6) => {
    //dato.title = "jose"                                       //marca error al querer modificar el valor de un atributo por ser de solo lectura
    console.log(dato.title)
}

funcion1({title:"Titulo",subtitle:'bubtitulo'})                 //se manda llamar la funcion con solo 2 atributos ya que son opcionales  

/////////////////////////

const numeros: ReadonlyArray<number> = [1,2,3]
//numeros.push(9)                                               //error ya que es readonly

