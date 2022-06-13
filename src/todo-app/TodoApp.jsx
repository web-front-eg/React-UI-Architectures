import { TodoAppModel } from "./mvp/TodoApp.model";
import { TodoAppPresenter } from "./mvp/TodoApp.presenter";
import TodoAppView from "./mvp/TodoApp.view";

import { MVPProvider } from "../shared/MVPProvider";

const TodoApp = () => (
  <MVPProvider model={new TodoAppModel()} presenter={TodoAppPresenter}>
    <TodoAppView />
  </MVPProvider>
);

export default TodoApp;
