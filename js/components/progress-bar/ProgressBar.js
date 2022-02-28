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

    render() {
        let HTML = '';
        for (let i = 0; i < this.data.length; i++) {
            HTML += `<div class="progress-bar">
                        <div class="top">
                            <div class="label">UX Desgin</div>
                            <div class="value">90%</div>
                        </div>
                        <div class="bottom">
                            <div class="bar" style="width: 90%;">
                                <div class="loading"></div>
                            </div>
                        </div>
                    </div>`;
        }
        this.DOM.insertAdjacentHTML('afterend', HTML);
        return;
    }
}

export { ProgressBar };
