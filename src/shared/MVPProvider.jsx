import React, { useState, useRef } from "react";

export const MVPProvider = ({ model, presenter, children }) => {
  const state = useState(model);
  const change = useRef(new presenter(state, children).methods).current;

  return React.cloneElement(children, {
    ...state[0],
    ...change,
  });
};
