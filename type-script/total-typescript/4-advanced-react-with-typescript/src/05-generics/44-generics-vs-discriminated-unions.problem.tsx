/**
 * In this exercise, we'll look at an example where generics are NOT
 * needed.
 *
 * 1. Take a look at the ModalProps type. Try to figure out what's
 * going on in the type.
 *
 * Notice what type gets returned if you type:
 *
 * type Example = ModalProps<'with-button'>;
 * type Example2 = ModalProps<'without-button'>;
 *
 * 2. There's a way of writing this type (and the component!) without
 * generics that's much simpler. Try to figure out how to do that.
 */

type ModalBaseProps = {
  isOpen: boolean;
};

type WithButtonModalProps = {
  variant: 'with-button';
  buttonLabel: string;
  onButtonClick: () => void;
};

type WithoutButtonModalProps = {
  variant: 'without-button';
};

export type ModalProps = ModalBaseProps &
  (WithButtonModalProps | WithoutButtonModalProps);

export type PossibleVariants = 'with-button' | 'without-button';

export const Modal = (props: ModalProps) => {
  // ...
  return null;
};

export const Parent = () => {
  return (
    <>
      <Modal
        isOpen
        variant="with-button"
        buttonLabel="Click Me!"
        onButtonClick={() => {}}
      ></Modal>
      <Modal isOpen variant="without-button"></Modal>

      {/* @ts-expect-error */}
      <Modal isOpen variant="with-button"></Modal>

      <Modal
        isOpen
        variant="without-button"
        /* @ts-expect-error */
        onButtonClick={() => {}}
      />
    </>
  );
};
