
function addNumbers(a: number, b: number) : number {
    return a + b;
}

// const result: number = addNumbers(1,2);


const addNumbersArrow = (a: number, b: number) :string => {
    return `${a +b}`
}

// const result2: string = addNumbersArrow(1,2);


//Primero los argumentos por definir, luego los opcionales y por último los que tienen valor por defecto
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) : number {
    return firstNumber * base;
}

// const resultMultiply = multiply(1);


//Sintaxis para imprimir el resultado como un objeto
// console.log({result, result2, resultMultiply})




interface Character {
    name: string,
    hp: number,
    //Para tener métodos en una interface hay que definir solo la firma del método con su tipo de retorno
    showHp: () => void
}


const healCharacter = (character: Character, amount: number) : void => {
    character.hp += amount;
}


const strider: Character = {
    name: 'strider',
    hp: 50,
    //Aquí iría la implementación del método de la interface
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }
}


strider.showHp();

healCharacter(strider, 50);

strider.showHp();










export {};