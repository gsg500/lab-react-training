import React from 'react';
import './IdCard.css';

function IdCard(props) {
  return (
    <div className="container">
      <img src={props.picture} alt="" />
      <ul className="person-info">
        <li> <strong>Last Name: </strong> {props.lastName} </li>
        <li> <strong>First Name: </strong> {props.firstName} </li>
        <li> <strong>Gender: </strong> {props.gender} </li>
        <li> <strong>Height: </strong> {props.height} </li>
        <li> <strong>Birthday: </strong> {props.birth.toDateString()} </li>
      </ul>
    </div>
  );
}

export default IdCard;