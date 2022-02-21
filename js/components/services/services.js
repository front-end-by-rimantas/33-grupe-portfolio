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
        if (typeof service !== 'object') {
            continue;
        }
        HTML += `<div class="service">
                    <img src="./img/services/${service.img}" alt="${service.alt}" class="icon">
                    <div class="number">${service.number}</div>
                    <div class="title">${service.title}</div>
                    <div class="description">${service.description}</div>
                </div>`;
    }

    servicesDOM.innerHTML = HTML;

    return [false, 'OK'];
}

export { services };
