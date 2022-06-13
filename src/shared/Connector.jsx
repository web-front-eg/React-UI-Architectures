import React from "react";

export const Connector = ({ ModelInstance, ViewModelType, children: view }) => {
  const model = React.useState(ModelInstance);
  const viewModel = React.useRef(new ViewModelType(model)).current;

  const unrefinedMethods = viewModel.derivedMethodNames.map(
    name => viewModel[name]
  );

  const methods = {};
  for (let i = 0; i < unrefinedMethods.length; ++i) {
    const current = unrefinedMethods[i];
    Object.assign(methods, { [current.name]: current });
  }

  return view({
    ...model[0],
    ...methods,
  });
};
