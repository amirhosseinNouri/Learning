import type { UserProps } from './user.types';

const User = ({ user }: UserProps) => (
  <>
    <p>{user.name}</p>
    <p>{user.email}</p>
  </>
);

export default User;
