import React, { Component } from 'react';
import '../FilterList.css';
import ExpandableListItem from './ExpandableListItem'

class AccordionMenu extends Component {
  render() {
    const { listItems, activeFilter, setCancerTypeFilter } = this.props;

    return (
      <div>
        <h3>Filter By Origin</h3>
        <ul className="CancerFilter">
          { listItems.map(item => {
              return (
                <ExpandableListItem
                  key={item.cancerTypeId}
                  setCancerTypeFilter={setCancerTypeFilter}
                  content={item.name}
                  cancerTypeId={item.cancerTypeId}
                  subContent={item.children}
                  isSelected={activeFilter === item.cancerTypeId}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default AccordionMenu;