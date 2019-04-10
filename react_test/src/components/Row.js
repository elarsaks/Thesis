import React, { Component } from 'react';

class Row extends Component {

  render() {
    let { item } = this.props;
    return (<tr className="data-row ">
      <td >{item.id}</td>
      <td className="col-md-4">{item.label}</td>
    </tr>);
  }
}
export default Row;
