import { TodoAppModel } from "./mvp/TodoApp.model";
import { TodoAppPresenter } from "./mvp/TodoApp.presenter";
import TodoAppView from "./mvp/TodoApp.view";

import { MVPConnector } from "../shared/MVPConnector";

const TodoApp = () => (
  <MVPConnector model={new TodoAppModel()} presenter={TodoAppPresenter}>
    {props => <TodoAppView {...props} />}
  </MVPConnector>
);

export default TodoApp;
