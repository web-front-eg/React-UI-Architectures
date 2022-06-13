import { ViewModel } from "../../shared/ViewModel";
import { gen_uid } from "../../shared/uid-gen";

const uid = gen_uid();

export class TodoAppViewModel extends ViewModel {
  constructor(model) {
    super(model);
    this.setMethods.call(this);
  }

  onChangeNewItem = event => {
    this._setModel(prv => ({
      ...prv,
      newItem: event.target.value,
    }));
  };

  onAddNewItem = () => {
    uid.update_uid();
    this._setModel(prv => ({
      todoList: [...prv.todoList, { item: prv.newItem, id: uid.uid }],
      newItem: "",
    }));
  };
}
