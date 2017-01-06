import React, { Component } from 'react';
import '../FilterList.css';
import StudyListGroup from './StudyListGroup';

class StudiesList extends Component {
  constructor() {
    super();

    this.state = {
      selectedStudies: []
    }
  }

  selectStudy(cancerStudyIdentifier) {
    if (this.state.selectedStudies.includes(cancerStudyIdentifier)) {
      this.setState({
        selectedStudies: this.state.selectedStudies.filter(selectedStudy => selectedStudy !== cancerStudyIdentifier)
      })
    } else {
      this.setState({
        selectedStudies: this.state.selectedStudies.concat([cancerStudyIdentifier])
      })
    }
  }

  selectAll() {
    const { studies } = this.props;

    let selectedStudyIds = studies.map(study => study.cancerStudyIdentifier);
    this.setState({
      selectedStudies: selectedStudyIds
    });
  }

  render() {
    const { studies, cancerTypes, activeFilter } = this.props;

    let cancerTypesToShow = cancerTypes;
    if (activeFilter) {
      cancerTypesToShow = cancerTypes.filter(cancerType => cancerType.cancerTypeId === activeFilter);
    }

    return (
      <div className="StudiesList">
        <h3>Select Studies (Currently Showing {studies.length} Studies)</h3>


        { cancerTypesToShow.map(cancerType => {
          return (
            <StudyListGroup
              heading={cancerType.name}
              children={cancerType.children}
              cancerTypeId={cancerType.cancerTypeId}
              studies={studies}
              selectedStudies={this.state.selectedStudies}
              selectStudy={this.selectStudy.bind(this)}
              currentLevel={0}
            /> 
          )
        })}
      </div>
    );
  }
}

export default StudiesList;


        // <span 
        //   className="cta select-all"
        //   onClick={e => this.selectAll()}>Select All
        // </span>
