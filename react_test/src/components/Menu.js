import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.png'
import Button from './Button'

class Menu extends Component{
  render(){
    const { create1000, create10000, add1000, add10000, remove } = this.props;
    return(
      <div className="menu-container" >
        <div className="logo" >
          <img src={logo} alt={'logo'} height={198} />
        </div>
        <div className="framework" >
          <h1> Framework </h1>
        </div>
        <div className="buttons-container">
          <Button id="create1000" className="Btn" funk={create1000} title="Create 1000 rows" />
          <Button id="create1000" className="Btn" funk={create10000} title="Create 10,000 rows" />
          <Button id="add1000" className="Btn" funk={add1000} title="Add 1000 rows" />
          <Button id="add10000" className="Btn" funk={add10000} title="Add 10,000 rows" />
          <Button id="delete" className="Btn" funk={remove} title="Clear" />
        </div>
      </div>
    );
  }
}
export default Menu;
