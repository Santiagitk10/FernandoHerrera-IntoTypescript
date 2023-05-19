export interface Passenger {
    name: string,
    children?: string[]
}

const passenger1: Passenger = {
    name: "Santiago"
}

const passenger2: Passenger = {
    name: "Cristina",
    children: ['Ratona','Mari']
}

const returnNumberOfChildren = (passenger: Passenger) => {
    //El operador ? opcional me permite devolver undefined si no existe, de lo contrario marca error
    //También me permite enviar un valor en caso de que sea undefined
    const childrenNumber = passenger.children?.length || 0;

    //El NunNull Assertion Operator me permite decirle a Typescript que confíe en que siempre
    //se va a recibir un error, no me marca el error en tiempo de escritura, pero si llega a 
    //ser nulo me marca el error en tiempo de ejecución.
    // const childrenNumber = passenger.children!.length || 0;
    console.log(passenger.name, childrenNumber);
    
}

returnNumberOfChildren(passenger1);
returnNumberOfChildren(passenger2);

