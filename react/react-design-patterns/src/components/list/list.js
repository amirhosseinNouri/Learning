import React from 'react';
import PropTypes from 'prop-types';
import withData from '../../hoc/with-data';

function List({ data, propertyName }) {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={`${item[propertyName]}-${index}`}>{item[propertyName]}</li>
      ))}
    </ul>
  );
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  properties: PropTypes.string,
};

export default withData('https://api.github.com/users/amirhosseinnouri/gists')(
  List,
);
