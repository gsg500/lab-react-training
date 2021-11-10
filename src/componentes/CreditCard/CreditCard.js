import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  let flag;
  if (props.type === 'Master Card') {
    flag =
      'https://logosmarcas.net/wp-content/uploads/2020/09/MasterCard-Logo-1990-1996.png';
  } else if (props.type === 'Visa') {
    flag =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png';
  }
  return (
    <div className="containerCard">
      <div className="cardContainer" style={{ backgroundColor: props.bgColor }}>
        <div style={{ color: props.color }}>
          <header>
          <img className="card-flag" src={flag} alt="flag" />
          </header>
          <h1>•••• •••• ••••{props.number.substr(-4)}</h1>
          <p>
            Expires {props.expirationMonth}/
            {props.expirationYear.toString().substr(-2)}
            <span className="bankName">{props.bank}</span>
          </p>
          <p>{props.owner}</p>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;