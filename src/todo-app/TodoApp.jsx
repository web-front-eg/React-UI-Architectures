import { TodoAppModel } from "./mvvm/TodoApp.model";
import { TodoAppViewModel } from "./mvvm/TodoApp.viewModel";
import TodoAppView from "./mvvm/TodoApp.view";

import { Connector } from "../shared/Connector";

const TodoApp = () => (
  <Connector
    ModelInstance={new TodoAppModel()}
    ViewModelType={TodoAppViewModel}
  >
    {props => <TodoAppView {...props} />}
  </Connector>
);

export default TodoApp;
