import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default function Transition() {
  return (
    <CSSTransitionGroup
      transitionName="fade"
      transitionAppear
      transitionAppearTimeout={1_000}
      transitionEnterTimeout={200}
    >
      <h1>Hello Transition</h1>
    </CSSTransitionGroup>
  );
}
