
//FORMA DE CREAR UNA CLASE

// export class Person {
//     public name: string;
//     private address: string;

//     constructor(){
//         this.name = 'Fernando';
//         this.address = 'New York';
//     }
// }


//FORMA CORTA DE CREAR UNA CLASE

export class Person {

    constructor(
        public name: string,
        private address: string = 'No Address'
    ){
        
    }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'New York');
//     }
// }



const ironman = new Person('ironman');

// console.log(ironman);

// const thor = new Hero('Thor',45,'Thorsito');

// console.log(thor);


//PRIORIZAR COMPOSICIÓN SOBRE HERENCIA

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
    }
}

const tony = new Hero('Ironman',45,'Tony Stark', ironman);


console.log(tony);