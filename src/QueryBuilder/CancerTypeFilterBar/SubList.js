import React, { Component } from 'react';
import '../FilterList.css';

class SubList extends Component {

  render() {
    const { listItems } = this.props;

    return (
      <ul className="SubList">
        { listItems.map(item => {
          return (<li key={item.name}>{item.name}</li>);
        })
      }
      </ul>
    );
  }
}

export default SubList;