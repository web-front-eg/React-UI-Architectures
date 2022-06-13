export class Presenter {
  constructor(model, view) {
    this._model = model[0];
    this._setModel = model[1];
    this._view = view;
  }
}
