//DESTRUCTURACIÓN DE OBJETOS

interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const { song, songDuration: duration, details } = audioPlayer;
const { author } = details;

// console.log('Song: ', song);
// console.log('Duration: ', duration);
// console.log('Author: ', author);




//DESTRUCTURACIÓN DE ARREGLOS

const dbz: string[] = ['Goku','Vegeta','Trunks'];

//Para destructurar un arreglo se deben considerar los espacios según el orden del array
const [,,personaje3 = 'Not found'] = dbz;

console.log('Personaje3 ', personaje3);


export {}