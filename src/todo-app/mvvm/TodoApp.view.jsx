const TodoAppView = ({ newItem, todoList, onAddNewItem, onChangeNewItem }) => (
  <div>
    <div>
      <label>Enter New Item</label>
      <input type="text" onChange={onChangeNewItem} value={newItem} />
      <button onClick={onAddNewItem}>Add</button>
    </div>

    <ul>
      {todoList?.map(todoItem => {
        const { id, item } = todoItem;
        return <li key={id}>{item}</li>;
      })}
    </ul>
  </div>
);

export default TodoAppView;
