export class Presenter {
  constructor(model, view) {
    this._model = model[0];
    this._setModel = model[1];
    this._view = view;

    this.baseOnlyMethodNames = Object.getOwnPropertyNames(this);
  }

  makeDerivedMethodNames = names => {
    return names.filter(
      (name, i) =>
        name !== this.baseOnlyMethodNames[i] && typeof this[name] === "function"
    );
  };
}
