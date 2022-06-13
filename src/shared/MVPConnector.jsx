import React from "react";

export const MVPConnector = ({
  ModelInstance,
  PresenterType,
  children: view,
}) => {
  const model = React.useState(ModelInstance);
  const presenter = React.useRef(new PresenterType(model, view)).current;

  const unrefinedMethods = presenter.derivedMethodNames.map(
    name => presenter[name]
  );

  const all_presenter_methods = {};
  for (let i = 0; i < unrefinedMethods.length; ++i) {
    const current = unrefinedMethods[i];
    Object.assign(all_presenter_methods, { [current.name]: current });
  }

  return view({
    ...model[0],
    ...all_presenter_methods,
  });
};
