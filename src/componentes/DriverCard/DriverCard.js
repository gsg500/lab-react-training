import React from 'react';
import './DriverCard.css';
import Rating from '../Rating/Rating';

function DriverCard(props) {
  return (
    <div>
      <div className="innerContainer">
        <div>
          <img className="driver-color" src={props.img} alt="" />
        </div>
        <div>
          <h2>{props.name}</h2>
          <h2>
            <Rating>{props.rating}</Rating>
          </h2>
          <p>
            {props.car.model}-{props.car.licenseCar}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;