
//Obtenemos ID random sin necesidad de librerias externas.
export const getId = () => {
    const rand = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);
    return rand + date;
}

//Formateamos fecha y la devolvemos en horario español. ej: 02-11-2021
export const fotmatDate = (date) => {
    const newDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return newDate.toLocaleDateString('es-ES', options);
}