import React, { Component } from 'react';
import '../FilterList.css';

class ExpandableListItem extends Component {

  render() {
    const { content, subContent, cancerTypeId, isSelected, setCancerTypeFilter } = this.props;

    return (
      <li 
        onClick={e => setCancerTypeFilter(cancerTypeId)}
        className={isSelected ? 'expanded' : 'collapsed'}
      >
        {content}
        <span>{subContent.length}</span>
      </li>
    );
  }
}

export default ExpandableListItem;