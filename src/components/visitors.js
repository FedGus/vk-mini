import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";



class LiveVisitors extends Component {
  state = {
    visitors: []
  };

  componentWillMount() {
    
      
  }

  renderTableBody = () => {
    const { visitors } = this.state;
    return visitors.map((v, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{v.ip}</td>
          <td>
            <img src={this.getCountyFlag(v.countryCode)} />
          </td>
          <td>{v.city}</td>
          <td>{v.state}</td>
          <td>{v.country}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Live Visitors</h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>IP</th>
              <th>Flag</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>{this.renderTableBody()}</tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default LiveVisitors;
