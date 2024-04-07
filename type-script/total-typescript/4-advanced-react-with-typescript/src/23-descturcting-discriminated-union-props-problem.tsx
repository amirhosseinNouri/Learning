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

export const Modal = ({ variant, title }: ModalProps) => {
  if (variant === 'no-title') {
    return <div>No title</div>;
  } else {
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
