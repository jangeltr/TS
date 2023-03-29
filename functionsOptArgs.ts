//Parametros por defecto al modo javascript
const createProduct = (
    id: string | number,
    isNew?: boolean,    //Parametros opcionales
    stock?: number,
) => {
    return {
        id,
        stock: stock ?? 10,     //si es null o undefined se asigna el valor por default
        isNew: isNew ?? true
    }
}

  // 0 === false        //igualdades en Javascript
  // '' === false
  // false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);





//Parametros por defecto al modo typescript
const createProduct2 = (
    id: string | number,
    isNew: boolean = true,    //Parametros opcionales con valor por defecto
    stock: number = 10,
) => {
    return {
        id,
        stock: stock,  
        isNew: isNew
    }
}

const pts1 = createProduct2(1, true, 12);
console.log(pts1);

const pts2 = createProduct2(1);
console.log(pts2);

const pts3 = createProduct2(1, false, 0);
console.log(pts3);
