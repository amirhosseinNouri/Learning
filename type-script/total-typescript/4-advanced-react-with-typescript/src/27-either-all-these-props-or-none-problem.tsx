import { ChangeEventHandler } from 'react';

type InputProps = (
  | {
      value: string;
      onChange: ChangeEventHandler;
    }
  | {
      value?: undefined;
      onChange?: undefined;
    }
) & {
  label: string;
};

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      {label}
      <input {...props} />
    </div>
  );
};

const Test = () => (
  <div>
    <Input label="label" value="Hello" onChange={() => {}} />
    <Input label="label" />

    {/* @ts-expect-error */}
    <Input label="label" value="Hello" />

    {/* @ts-expect-error */}
    <Input label="label" onChange={() => {}} />
  </div>
);
