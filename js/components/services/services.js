/**
 * Pasirinktame elemente is duotu duomenu yra sugeneruojamas paslaugu korteliu HTML turinys.
 * @param {string} selector Taisykle, kaip rasti norima HTML elementa
 * @param {Object[]} data Duomenys, kuriuos naudojant yra konstruojamas HTML turinys
 * @param {string} data[].img Paslaugos ikona/nuotrauka su pilnu failo pletiniu
 * @param {string} data[].alt Paslaugos ikonos/nuotraukos alt reiksme
 * @param {string} data[].number Paslaugos numeris
 * @param {string} data[].title Paslaugos pavadinimas
 * @param {string} data[].description Paslaugos trumpas aprasas
 *
 * @example <caption>Pavyzdinis naudojimas, kai neduodama duomenu.</caption>
 * // returns [true, 'Data has to be a non-empty array']
 * services('div', []);
 *
 * @returns {[boolean, string]} Funkcijos veikimo statusas `[error, message]`
 */
function services(selector, data) {
    if (typeof selector !== 'string' || selector === '') {
        return [true, 'Selector has to be a not-empty string'];
    }
    if (!Array.isArray(data)) {
        return [true, 'Data has to be an array'];
    }
    if (data.length === 0) {
        return [true, 'Data has to be a non-empty array'];
    }

    const servicesDOM = document.querySelector(selector);
    if (!servicesDOM) {
        return [true, 'Could not found DOM element based on given selector'];
    }
    let HTML = '';

    const isValidServiceObject = (service) => {
        if (
            typeof service !== 'object' ||
            service === null ||
            Array.isArray(service)
        ) {
            return false;
        }
        const keys = Object.keys(service);
        if (keys.length < 4 || keys.length > 5) {
            return false;
        }
        return true;
    };

    const isValidServiceImg = (img) => {
        if (typeof img !== 'string' || img === '') {
            return false;
        }
        const parts = img.split('.');
        if (
            parts.length < 2 ||
            parts[0].trimStart() === '' ||
            parts[1].trim() === ''
        ) {
            return false;
        }
        return true;
    };

    const isValidServiceAlt = (alt) => {
        if (alt === undefined) {
            return true;
        }
        if (typeof alt !== 'string') {
            return false;
        }
        return true;
    };

    const isValidServiceNumber = (number) => {
        if (
            typeof number !== 'string' ||
            number.length <= 1 ||
            !isFinite(+number) ||
            +number < 0 ||
            +number % 1 !== 0
        ) {
            return false;
        }
        return true;
    };

    const isValidServiceTitle = (title) => {
        if (typeof title !== 'string' || title.trim() === '') {
            return false;
        }
        return true;
    };

    const isValidServiceDescription = (description) => {
        if (typeof description !== 'string' || description.trim() === '') {
            return false;
        }
        return true;
    };

    const isValidService = (service) => {
        if (
            !isValidServiceObject(service) ||
            !isValidServiceImg(service.img) ||
            !isValidServiceAlt(service.alt) ||
            !isValidServiceNumber(service.number) ||
            !isValidServiceTitle(service.title) ||
            !isValidServiceDescription(service.description)
        ) {
            return false;
        }
        return true;
    };

    for (const service of data) {
        if (!isValidService(service)) {
            continue;
        }
        HTML += `<div class="service">
                    <img src="./img/services/${service.img.trim()}" 
                        alt="${service.alt ? service.alt : ''}" class="icon">
                    <div class="number">${service.number}</div>
                    <div class="title">${service.title}</div>
                    <div class="description">${service.description}</div>
                </div>`;
    }

    if (HTML === '') {
        return [true, 'Data has no valid service objects'];
    }

    servicesDOM.innerHTML = HTML;

    return [false, 'OK'];
}

export { services };
