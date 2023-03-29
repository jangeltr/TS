export class MyService {

    static instance: MyService | null = null;       //se declara y se inicializa en null

    private constructor(private name: string) {}    //Se declara "private" para que el constructor solo pueda ser accedido desde dentro de la clase

    getName() {
        return this.name;
    }

    static create(name: string) {                   //es para crear la primer y unica instancia de la clase y es static para que pueda ser llamado
        if (MyService.instance === null) {          //directamente ya que no se puede instancias la clase desde fuera
            console.log('debería entrar una vez');
            MyService.instance = new MyService(name);//aqui se manda llamar el constructor
        }
        return MyService.instance;                   //Se retorna la instancia creada
    }
}

const myService1 = MyService.create('service 1');
console.log(myService1.getName());
const myService2 = MyService.create('service 2');
console.log(myService2.getName());
const myService3 = MyService.create('service 3');
console.log(myService3.getName());

console.log(myService1 === myService2);