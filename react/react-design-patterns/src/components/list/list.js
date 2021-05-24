import React from 'react';
import PropTypes from 'prop-types';
import withData from '../../hoc/with-data';
import connectWithGists from '../../hoc/connect-with-gists';
import Gist from '../gist';

function List({ gists, username }) {
  console.log(gists);
  return (
    <ul>
      {gists.fulfilled &&
        gists.value.map((item, index) => <Gist key={index} {...item} />)}
    </ul>
  );
}

List.propTypes = {
  gists: PropTypes.object,
  properties: PropTypes.string,
  username: PropTypes.string,
};

List.defaultProps = {
  gists: null,
  properties: '',
  username: '',
};

export default connectWithGists(List);
