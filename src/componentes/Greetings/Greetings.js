import React from 'react';

function Greetings(props) {
  let greeting = '';
  switch (props.language) {
    case 'de':
      greeting = 'Hallo ';
      break;
    case 'fr':
      greeting = 'Bonjour ';
      break;
    case 'en':
      greeting = 'Hello ';
      break;
    default:
      greeting = 'Hola ';
      break;
  }
  return (
    <>
      <div>
        <p>
          {greeting}
          {props.children}
        </p>
      </div>
    </>
  );
}

export default Greetings;