class Section {

    constructor({ renderer, items }, container) {
        this._items = items;
        this._renderer = renderer;
        this._container = container;
        console.log(this._items);
    }

    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item);
        });
    }
    addItem(element) {
        this._container.prepend(element);
    }
}
export default Section;