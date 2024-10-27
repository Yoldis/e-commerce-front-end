


export const getTwoLetters = (cadena:string):string => {

    let firtsLetter = '';
    let secondsLetter = '';

    if(cadena) {
        firtsLetter = cadena.split(' ')[0].split('')[0];
        if(cadena.split(' ').length > 1) secondsLetter = cadena.split(' ')[1].split('')[0]
        else secondsLetter = cadena.split(' ')[0].split('')[1];
    }

    return firtsLetter + secondsLetter;
}