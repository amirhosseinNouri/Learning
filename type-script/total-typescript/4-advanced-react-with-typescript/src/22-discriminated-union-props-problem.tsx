import React from 'react';

type ModalProps = {
  variant: 'no-title' | 'title';
  title?: string;
};

export const Modal = (props: ModalProps) => {
  if (props.variant === 'no-title') {
    return <div>No title</div>;
  } else {
    return <div>{props.title}</div>;
  }
};

const Test = () => {
  return (
    <div>
      <Modal variant="title" title="hello" />
      <Modal variant="no-title" />
      {/* @ts-expect-error */}
      <Modal />
      {/* @ts-expect-error */}
      <Modal variant="no-title" title="title" />
    </div>
  );
};
