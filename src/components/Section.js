class Section {
    constructor({ renderer, items }, containerSelect) {
        this._renderer = renderer;
        this._container = document.querySelector(`.${containerSelect}`);

    }

    rednerItems(items) {
        items.forEach(item => {
            this._renderer(item);
        });
    }
    addItem(element) {
        this._container.append(element);
    }
}
export default Section;