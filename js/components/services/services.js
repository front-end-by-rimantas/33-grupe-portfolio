function services(selector, data) {
    const servicesDOM = document.querySelector(selector);
    let HTML = '';

    for (const service of data) {
        HTML += `<div class="service">
                    <img src="./img/services/${service.img}" alt="${service.alt}" class="icon">
                    <div class="number">${service.number}</div>
                    <div class="title">${service.title}</div>
                    <div class="description">${service.description}</div>
                </div>`;
    }

    servicesDOM.innerHTML = HTML;

    return true;
}

export { services };
