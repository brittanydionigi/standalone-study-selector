import React, { Component } from 'react';
import './FilterList.css';
import ExpandableFilter from './ExpandableFilter'

class CancerFilter extends Component {

  render() {
    const { selectedItems, listItems, selectFilter } = this.props;

    return (
      <div>
        <h3>Filter By Origin</h3>
        <ul className="CancerFilter">
          { listItems.map(item => {

            let children = item.children;

            if (children.length) {
              children = children.map(child => {
                  return <li className="child">{child.name}</li>
                });

              return (
                <ExpandableFilter
                  cancerName={item.name}
                  children={item.children}
                  selectFilter={(e) => selectFilter(item.name) }
                  expanded={(selectedItems.includes(item.name))}
                />
              ) 
            }
          })}
        </ul>
      </div>
    );
  }
}

export default CancerFilter;



                // <li onClick={(e) => selectFilter(item.name) } className={itemClass}>
                //   {item.name}
                //   <span className="count">{children.length}</span>
                //   <ul>{children}</ul>
                // </li>