import User from '@/components/user';
import type { User as UserType } from '@/components/user';

export type UsersProps = {
  users: UserType[];
};

const Users = ({ users }: UsersProps) => {
  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return { props: { users: data } };
}
