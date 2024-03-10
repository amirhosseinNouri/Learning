import { ReactNode } from 'react';

type BoxProps = {
  children: ReactNode;
};

const Box = ({ children }: BoxProps) => (
  <div className="p-10 shadow-md rounded-md w-64 bg-slate-400 text-white">
    {children}
  </div>
);

export default Box;
