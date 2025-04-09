import { shallowEquals } from "../equalities";
import { ComponentType, createElement } from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  _equals = shallowEquals,
) {
  let prevProps: P;
  let prevResult: React.ReactElement;

  return function MemoizedComponent(props: P) {
    if (!prevProps || !_equals(prevProps, props)) {
      prevProps = props;
      prevResult = createElement(Component, props);
    }

    return prevResult;
  };
}
