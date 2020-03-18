class Accordion {
  constructor(root) {
    this._root = root;
    this._mode = this._root.dataset["modifier"];
    this._open = this._root.dataset["open"];
    this._headers = this._root.querySelectorAll(".accordion__header");
    this._containers = this._root.querySelectorAll(".accordion__content");

    if (this._open > this._headers.length) {
      this._open = -1;
    }

    // setup event and openSTate
    this._setOpenState(this._mode);
    this._setup();
  }
  _setup = () => {
    this._headers.forEach(h => h.addEventListener("click", this._handleClick));
  };
  _handleClick = e => {
    const idx = e.target.dataset.index;
    const container = this._root.querySelector(
      `.accordion__content[data-index="${idx}"]`
    );
    const isOpen = this._isOpen(container);

    if (isOpen && this._mode !== "single-open") {
      container.classList.remove("accordion--open");
    } else {
      container.classList.add("accordion--open");
      if (this._mode === "single-open") {
        this._updateChildsOpenState(idx, false);
      }
    }
  };
  _isOpen = element => {
    return element.classList.contains("accordion--open");
  };
  _setOpenState = mode => {
    switch (mode) {
      case "single-open":
        this._root
          .querySelectorAll(".accordion__content")
          [this._open !== -1 ? this._open : 0].classList.add(
            "accordion--open"
          );
        break;
      case "all-open":
        return this._updateChildsOpenState(null, true);
      default:
    }
  };
  _updateChildsOpenState = (exclude, isOpen) => {
    [...this._containers]
      .filter(c => (c.dataset.index === exclude ? false : true))
      .forEach(c =>
        isOpen
          ? c.classList.add("accordion--open")
          : c.classList.remove("accordion--open")
      );
  };
}

(() => {
  document.querySelectorAll(".accordion").forEach(a => new Accordion(a));
})();
