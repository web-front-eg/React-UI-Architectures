export class Presenter {
  constructor(model, view) {
    this._model = model[0];
    this._setModel = model[1];
    this._view = view;

    this.baseOnlyMethodNames = Object.getOwnPropertyNames(this);
    this.derivedMethodNames = undefined;
  }

  setMethods = () => {
    this.derivedMethodNames = Object.getOwnPropertyNames(this).filter(
      (name, i) =>
        name !== this.baseOnlyMethodNames[i] && typeof this[name] === "function"
    );
  };
}
