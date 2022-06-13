class uidGen {
  _uid = 0;
  get uid() {
    return this._uid;
  }

  update_uid() {
    ++this._uid;
  }

  static instance = undefined;

  static get gen_or_get_singleton_instance() {
    if (!uidGen.instance) {
      uidGen.instance = new uidGen();
    }

    return uidGen.instance;
  }
}

export const gen_uid = () => new uidGen();
export default uidGen.gen_or_get_singleton_instance;
