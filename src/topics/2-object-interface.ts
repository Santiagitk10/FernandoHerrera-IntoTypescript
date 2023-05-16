const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string,
    hp: number,
    skills: string[],
    //Con el '?' se puede indicar que el valor puede ser undefined
    hometown?: string
}


const strider: Character = {
    name: 'Strider',
    hp: 45,
    skills: ['Bash','Counter'],
}

strider.hometown = 'Rivendell';

console.table(strider);

export {};