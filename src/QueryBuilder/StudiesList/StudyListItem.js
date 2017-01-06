import React, { Component } from 'react';
import './StudyListItem.css';
import StudyLinks from './StudyLinks';
import FontAwesome from "react-fontawesome";
import 'font-awesome/css/font-awesome.css'

class StudyListItem extends Component {

  render() {
    const { study, isSelected, selectStudy } = this.props;

    return (
       <li className="StudyListItem" onClick={e => selectStudy(study.cancerStudyIdentifier)}>
        <FontAwesome name={isSelected ? 'check-square-o' : 'square-o'} />
        {study.name}
        <StudyLinks
          cancerStudyIdentifier={study.cancerStudyIdentifier}
          pmid={study.pmid}
        />
      </li>
    );
  }
}

export default StudyListItem;
