import React from 'react';
import PropTypes from 'prop-types';
import withData from '../../hoc/with-data';
import connectWithGists from '../../hoc/connect-with-gists';

function List({ gists, propertyName, username }) {
  console.log(gists);
  return (
    <ul>
      {gists.fulfilled &&
        gists.value.map((item, index) => (
          <li key={`${item[propertyName]}-${index}`}>{item[propertyName]}</li>
        ))}
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
