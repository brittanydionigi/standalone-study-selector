import React, { Component } from 'react';
import '../FilterList.css';
import SubList from './SubList';

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
        { isSelected && <SubList key={content} listItems={subContent} /> }
      </li>
    );
  }
}

export default ExpandableListItem;