import type { UsersProps } from './users.types';

const Users = ({ users }: UsersProps) => {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} {user.email}
        </div>
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
