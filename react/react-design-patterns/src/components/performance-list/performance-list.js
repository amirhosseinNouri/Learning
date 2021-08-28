import React from 'react';
import PerformanceItem from '../performance-item';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

export default class PerformanceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['foo', 'bar'],
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({
      items: [...this.state.items, 'New item'],
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <PerformanceItem item={item} key={`${item}-${index}`} />
          ))}
        </ul>
        <button onClick={() => this.handleButtonClick()}>Add New Item</button>
      </div>
    );
  }
}
