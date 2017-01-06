import React, { Component } from 'react';
import './App.css';
import mockData from './lib/MockData';
import QueryBuilder from './QueryBuilder/QueryBuilder.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Query DataSets</h2>
        <div id="QueryBuilderContainer">

          <QueryBuilder
            studies={mockData.studies}
            cancerTypes={mockData.cancerTypes}
          />
        </div>
      </div>
    );
  }
}

export default App;

      // <ul id="QueryTabBar">
      //   <li className="active">Select Studies</li>
      //   <li>Build Query</li>
      // </ul>

        // <StudySelector
        //   studies={mockData.studies}
        //   cancerTypes={mockData.cancerTypes}
        // />
        // <QueryBuilder
        //   studies={mockData.studies}
        //   cancerTypes={mockData.cancerTypes}
        // />
