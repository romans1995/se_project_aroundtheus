class Section {
    // obj str
    //obj{
    //  renderer:fn
    //  items:[]
    // }
    //new Section(obj, str)
    // new Section(fh, listItems, str)
    constructor({ renderer, items }, containerSelect) {
        this._items = items;
        this._renderer = renderer;
        // this._container = document.querySelector(`.${containerSelect}`);
        this._container = containerSelect;
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