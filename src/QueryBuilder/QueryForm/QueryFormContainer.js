import React, { Component } from 'react';

class QueryForm extends Component {

  render() {
    const { selectedStudies } = this.props;

    return (
      <div>
        <h3>Build Query</h3>
        <h4>{selectedStudies.length} Selected Studies</h4>
        <h5>Data Type Priority:</h5>
        <label><input type="radio" name="DataTypePriority" value="mut-cna" /> Mutation & CNA</label>
        <label><input type="radio" name="DataTypePriority" value="mut" /> Mutation Only</label>
        <label><input type="radio" name="DataTypePriority" value="cna" /> CNA Only</label>
      </div>
    );
  }
}

export default QueryForm;
