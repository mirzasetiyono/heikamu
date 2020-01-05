import React, { Component } from 'react';

import data from "./company.json";

import { Header } from "./Header";

import { Body } from "./Body";

import { Footer } from "./Footer";

import { ModalFilter } from "./ModalFilter";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      allData : data.jobList // <== Straight from local json (see company.json)
    }
  }

  // Method for querying the jobList Json based on user actions // choosing query from (header.js) then pass it to app.js, setState triggers re-render in child component (Body.js), resulting in displaying the query results.
  queryJobType = (userSelect) => {      // <== job type query
    const filteredjobType = data.jobList.filter( (job) => (
      job.jobType === userSelect
    ))
    this.setState({ allData: filteredjobType })
  }

  queryCategory = (userSelect) => {      // <== job category query
    const filteredCategory = data.jobList.filter( (job) => (
      job.category === userSelect
    ))
    this.setState({ allData : filteredCategory });
  }
  queryProvince = (userSelect) => {      // <== job province location query
    const filteredCategory = data.jobList.filter( (job) => (
      job.province === userSelect
    ))
    this.setState({ allData : filteredCategory });
  }
  queryCity = (userSelect) => {         // <== // <== job city location query
    const filteredCategory = data.jobList.filter( (job) => (
      job.city === userSelect
    ))
    this.setState({ allData : filteredCategory });
  }
  // Rendering sequence : Header (Header.js) {Pass 4 query function as props, called whenever query is selected}, Body (Body.js) {pass the data from local json as props}, Modal (ModalFilter.js), and Footer (Footer.js)
  render() {
    return (
      <React.Fragment>
        <Header queryJobType={this.queryJobType} queryCategory={this.queryCategory} queryProvince={this.queryProvince} queryCity={this.queryCity} />    
        <Body data = {this.state.allData} />
        <ModalFilter />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App

