import React, { Component } from 'react';
import StudiesList from './StudiesList/StudiesList.js';
import AccordionMenu from './CancerTypeFilterBar/AccordionMenu';
import './QueryBuilder.css';

class QueryBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cancerTypeFilter: null,
      searchText: '',
      filteredStudies: this.props.studies
    }
  }

  setCancerTypeFilter(filterName) {
    const { studies, cancerTypes } = this.props;

    if (filterName === this.state.cancerTypeFilter) {
      this.setState({
        cancerTypeFilter: null,
        filteredStudies: studies
      })
    } else {
      const selectedCancerType = cancerTypes.find(cancer => cancer.cancerTypeId === filterName);
      const filteredStudies = studies.filter(study => {
        return selectedCancerType.allDescendants.includes(study.typeOfCancerId)
      });

      this.setState({
        cancerTypeFilter: filterName,
        filteredStudies: filteredStudies.length ? filteredStudies : studies
      });
    }

  }

  render() {
    const { cancerTypes } = this.props;


    return (
      <div className="Query-Builder">
        <AccordionMenu
          listItems={cancerTypes}
          activeFilter={this.state.cancerTypeFilter}
          setCancerTypeFilter={this.setCancerTypeFilter.bind(this)}
        />
        <StudiesList 
          studies={this.state.filteredStudies}
          cancerTypes={cancerTypes}
          activeFilter={this.state.cancerTypeFilter}
        />
      </div>
    );
  }
}

export default QueryBuilder;
