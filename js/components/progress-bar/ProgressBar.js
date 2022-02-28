class ProgressBar {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.init();
    }

    init() {
        if (this.isValidSelector() && this.isValidData()) {
            this.render();
        }
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

        return;
    }
}

export { ProgressBar };
