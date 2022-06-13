import { TodoAppModel } from "./mvp/TodoApp.model";
import { TodoAppPresenter } from "./mvp/TodoApp.presenter";
import TodoAppView from "./mvp/TodoApp.view";

import { BaseProvider } from "../mvp/BaseProvider";

const TodoApp = () => (
  <BaseProvider model={new TodoAppModel()} presenter={TodoAppPresenter}>
    <TodoAppView />
  </BaseProvider>
);

export default TodoApp;
