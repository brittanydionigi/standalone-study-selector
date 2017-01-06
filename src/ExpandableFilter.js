import React, { Component } from 'react';
import logo from './logo.svg';
import './FilterList.css';

class ExpandableFilter extends Component {
  render() {
    const { selectFilter, expanded, children, cancerName } = this.props;
    let subLevel = '';

    if (expanded && children.length) {
      subLevel = children.map(child => {
        return <li className="child">{child.name}</li>
      })
    }

    return (
      <li 
        onClick={(e) => selectFilter(cancerName)}
        className={expanded ? 'selected' : ''}>
        {cancerName}
        <span className="count">{children.length}</span>
        {subLevel}
      </li>
    );
  }
}

export default ExpandableFilter;
