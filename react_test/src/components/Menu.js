import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.png'
import Button from './Button'

class Menu extends Component{
  render(){
    const { create, add,  remove } = this.props;
    return(
      <div className="menu-container" >

        <img src={logo} alt={'logo'} />
        <div className="framework" >
          <h1> Framework </h1>
        </div>

        <div className="buttons-container">
          <Button id="create1000" className="Btn" funk={() => create(1000) } title="Create 1000 rows" />
          <Button id="add1000" className="Btn" funk={() => {add(1000)}} title="Add 1000 rows" />
          <Button id="create1000" className="Btn" funk={() => {create(10000)}} title="Create 10 000 rows" />
          <Button id="add10000" className="Btn" funk={() => {add(10000)}} title="Add 10 000 rows" />
          <Button id="delete" className="Btn" funk={remove} title="Clear" />
        </div>
      </div>
    );
  }
}
export default Menu;
