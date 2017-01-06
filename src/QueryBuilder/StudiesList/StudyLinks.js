import React, { Component } from 'react';
import './StudyLinks.css';
import FontAwesome from "react-fontawesome";
import 'font-awesome/css/font-awesome.css'

class StudyLinks extends Component {

  renderStudyLinks(study) {
    let links = [];
    if (study.cancerStudyIdentifier)
      links.push({icon: 'cube', url: `/study?id=${study.cancerStudyIdentifier}#summary`});
    if (study.pmid)
      links.push({icon: 'book', url: `http://www.ncbi.nlm.nih.gov/pubmed/${study.pmid}`});
    return links.map((link, i) => (
      <a key={i} href={link.url}>
        <FontAwesome name={link.icon}/>
      </a>
    ));
  }

  render() {
    const { cancerStudyIdentifier, pmid } = this.props;
    
    let links = [];
    if (cancerStudyIdentifier)
      links.push({icon: 'cube', url: `/study?id=${cancerStudyIdentifier}#summary`});
    if (pmid)
      links.push({icon: 'book', url: `http://www.ncbi.nlm.nih.gov/pubmed/${pmid}`});
    
    return (
      <div className="StudyLinks">
        { links.map((link, i) => {
          return (<a key={i} href={link.url}>
            <FontAwesome name={link.icon}/>
          </a>); 
        })}
      </div>
    );
  }
}

export default StudyLinks;
