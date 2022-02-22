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

    for (const service of data) {
        if (
            typeof service !== 'object' ||
            service === null ||
            Array.isArray(service) ||
            !service.img ||
            !service.img ||
            !service.img ||
            !service.alt ||
            !service.alt ||
            !service.alt ||
            !service.number ||
            !service.number ||
            !service.number ||
            !service.title ||
            !service.title ||
            !service.title ||
            !service.description
        ) {
            continue;
        }
        HTML += `<div class="service">
                    <img src="./img/services/${service.img}" alt="${service.alt}" class="icon">
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
