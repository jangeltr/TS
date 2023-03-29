type UserId = string | number;
let userId: UserId;
userId = 'string';
userId = 1;

console.log('Hoola!' +  userId);



///////////////////////////////////////

type miTipo1 = {
    id: number,
    nombre: string
}

type miTipo2 = {
    direccion : string
}

let d1:miTipo1={
    id : 5,
    nombre : 'juan perez'
}
let d2:miTipo2={
    direccion : 'Ramon Coreona'
}

const createNewData = (dato1: miTipo1, dato2: miTipo2)=>{  //retorna un objeto con todos los atributos de d1 y d2
    return {
        ...dato1,
        ...dato2
    }
}

let r = createNewData(d1,d2)

//////////////////////////////////////////

