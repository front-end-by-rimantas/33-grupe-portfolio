class ProgressBar {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            const err = 'ERROR: invalid selector';
            console.error(err);
            return err;
        }
        if (!this.isValidData()) {
            const err = 'ERROR: invalid data';
            console.error(err);
            return err;
        }
        if (!this.getTargetElement()) {
            const err =
                'ERROR: could not found element based on provided selector';
            console.error(err);
            return err;
        }
        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            return false;
        }
        return true;
    }

    isValidData() {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            return false;
        }
        return true;
    }

    getTargetElement() {
        this.DOM = document.querySelector(this.selector);
        if (this.DOM === null) {
            return false;
        }
        return true;
    }

    isValidSingleBarData(bar) {
        return true;
    }

    barHTML(bar) {
        const color = bar.color ? ' loading-' + bar.color : '';
        return `<div class="progress-bar">
                    <div class="top">
                        <div class="label">${bar.label}</div>
                        <div class="value">${bar.value}%</div>
                    </div>
                    <div class="bottom">
                        <div class="bar" style="width: ${bar.value}%;">
                            <div class="loading${color}"></div>
                        </div>
                    </div>
                </div>`;
    }

    render() {
        let HTML = '';
        for (const progressBar of this.data) {
            if (!this.isValidSingleBarData(progressBar)) {
                continue;
            }
            HTML += this.barHTML(progressBar);
        }

        if (HTML === '') {
            const err = 'ERROR: data has no valid progress bar objects';
            console.error(err);
            return err;
        }

        this.DOM.insertAdjacentHTML('afterend', HTML);
        return;
    }
}

export { ProgressBar };
