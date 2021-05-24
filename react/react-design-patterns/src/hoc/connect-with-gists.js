import { connect } from 'react-refetch';

const connectWithGists = connect(({ username }) => ({
  gists: `https://api.github.com/users/${username}/gists`,
}));

export default connectWithGists