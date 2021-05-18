import { useState, useEffect } from 'react';
const withData = (url) => (Component) => (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return <Component {...props} data={data} />;
};

export default withData;
