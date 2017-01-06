import React, { Component } from 'react';
import StudyListItem from './StudyListItem';
import './StudyListGroup.css';

class StudyListGroup extends Component {

  render() {
    const { currentLevel, heading, children, cancerTypeId, studies, selectedStudies, selectStudy } = this.props;

    const matchingStudies = studies.filter(study => study.typeOfCancerId === cancerTypeId);
    const studyListLevel = `StudyList Level${currentLevel}`;
    const headingLevel = `CancerHeadingLevel${currentLevel}`;

    return (
      <ul className={studyListLevel}>
        <li className={headingLevel}>{heading}</li>
        { matchingStudies.map(study => {
          let isStudySelected = selectedStudies.includes(study.cancerStudyIdentifier);
            return (
              <StudyListItem key={study.cancerStudyIdentifier} study={study} isSelected={isStudySelected} selectStudy={selectStudy} />);
          })
        }
        { children && children.map(childCancer => {
          return (
            <StudyListGroup
              heading={childCancer.name}
              children={childCancer.children}
              cancerTypeId={childCancer.cancerTypeId}
              studies={studies}
              selectedStudies={selectedStudies}
              currentLevel={currentLevel + 1}
              selectStudy={selectStudy}
            />
          )
        })}
      </ul>


    );
  }
}

export default StudyListGroup;
