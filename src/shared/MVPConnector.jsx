import React from "react";

export const MVPConnector = ({ model, presenter, children }) => {
  const observed_model = React.useState(model);
  const presenter_instance = React.useRef(
    new presenter(observed_model, children)
  ).current;

  const unrefined_all_derived_methods =
    presenter_instance.allDerivedMethodNames.map(
      name => presenter_instance[name]
    );

  const all_presenter_methods = {};
  for (let i = 0; i < presenter_instance.allDerivedMethodNames.length; ++i) {
    const current = unrefined_all_derived_methods[i];
    Object.assign(all_presenter_methods, { [current.name]: current });
  }

  return children({
    ...observed_model[0],
    ...all_presenter_methods,
  });
};
