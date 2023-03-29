//en javascript

const myfunc = (...args)=>console.log(args) //se recibe como una serie de argumentos, se manejan o imprimen en este caso como un arreglo

myfunc(1,2,3,4,5)    // salida [1,2,3,4,5]



//en typescript

const myfunc2 = (...args: number[])=>{
    args.map((item)=>{                          //es tratado como un arreglo
        console.log(item)
    })
}

myfunc2(1,2,3)     //los parametros se envian como una serie de argumentos