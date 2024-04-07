import React from 'react';

// type ModalProps = {
//   variant: 'no-title' | 'title';
//   title?: string;
// };

type ModalProps =
  | {
      variant: 'title';
      title: string;
    }
  | { variant: 'no-title' };

export const Modal = (props: ModalProps) => {
  if (props.variant === 'no-title') {
    return <div>No title</div>;
  } else {
    const { title } = props;
    return <div>{title}</div>;
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
