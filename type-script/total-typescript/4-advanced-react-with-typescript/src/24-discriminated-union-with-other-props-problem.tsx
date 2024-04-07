import React from 'react';

type ModalBaseProps = {
  backgroundColor: string;
};

type ModalProps = ModalBaseProps &
  (
    | {
        variant: 'title';
        title: string;
      }
    | { variant: 'no-title' }
  );

export const Modal = (props: ModalProps) => {
  if (props.variant === 'no-title') {
    return (
      <>
        <div>No title</div>
        <button style={{ backgroundColor: props.backgroundColor }}>
          Button
        </button>
      </>
    );
  } else {
    return (
      <>
        <div>{props.title}</div>
        <button style={{ backgroundColor: props.backgroundColor }}>
          Button
        </button>
      </>
    );
  }
};

const Test = () => {
  return (
    <div>
      {/* @ts-expect-error */}
      <Modal buttonColor="red" />
      <Modal
        backgroundColor="red"
        variant="no-title"
        // @ts-expect-error
        title="title"
      />
      <Modal variant="title" title="hello" backgroundColor="red" />
      {/* @ts-expect-error */}
      <Modal />
      {/* @ts-expect-error */}
      <Modal variant="no-title" title="title" />
    </div>
  );
};
