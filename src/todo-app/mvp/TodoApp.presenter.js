import { gen_uid } from "../../shared/uid-gen";

const uid = gen_uid();

export class TodoAppPresenter {
  constructor(model, view) {
    this._model = model[0];
    this._setModel = model[1];

    this._view = view;
    this.methods = {
      onChangeNewItem: this._onChangeNewItem.bind(this),
      onAddNewItem: this._onAddNewItem.bind(this),
    };
  }

  _onChangeNewItem = event => {
    this._setModel(prv => ({
      ...prv,
      newItem: event.target.value,
    }));
  };

  _onAddNewItem = () => {
    uid.update_uid();
    this._setModel(prv => ({
      todoList: [...prv.todoList, { item: prv.newItem, id: uid.uid }],
      newItem: "",
    }));
  };
}
