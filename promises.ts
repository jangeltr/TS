//Usando axios para poder utilizar un fetch en el frontend o en el backend
//ya que no existe fetch en el backend
import axios from 'axios';

//necesaros para tipar el resultado de "axios.get" ya que lo que devuelve tiene esta estructura
export interface Category {
    id:    number;
    name:  string;
    image: string;
}
export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
}
/////////////////////////////////////////////////

(async ()=> {                   //funcion asincrona que se autoejecuta
    function delay (time: number) {
        const promise = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('string');
        }, time);
        });
        return promise;
    }

    console.log('---'.repeat(10));
    const rta = await delay(3000);
    console.log(rta);

    ////////////////////////////////

    function getProducts() {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products');      //devuelve una promesa de tipo any
        return promise;
    }

    async function getProductsAsync() {
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');    //devuelve una promesa de tipo any
        return rta.data;                                                            //retornamos los datos pero al venir de tipo any no podemos acceder a su estructura
    }

    console.log('---'.repeat(10));
    const products = await getProducts();
    console.log(products.data);
    const productsv2 = await getProductsAsync();
    console.log(productsv2);

    /////////////////////////////////
    async function getProductos(): Promise<Product[]> {
        const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');    //el resultado ahora tiene un tipo
        //const r = await axios.get('https://api.escuelajs.co/api/v1/products');                    //si la libreria no soporta el tipado directo, la usamos asi
        //const data = r.data as Product[]                                                          //y hacemos el casting asi
        return data;
    }
    
    const productos = await getProductos();
    console.log(products.map(item => `${item.id} - ${item.title}}`));               //ya podemos acceder a la estructura de los datos devueltos
})();