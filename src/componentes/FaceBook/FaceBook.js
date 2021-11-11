import React from 'react';
import profiles from '../../data/berlin.json';
import './FaceBook.css';

class Facebook extends React.Component {
  state = {
    selectedCountry: null, };

  selectCountry = (evt) => {
    this.setState({
      selectedCountry: evt.target.name,
    })}

  render() {
    const countriesSet = [...new Set(profiles.map((oprofile) => oprofile.country))]; 
    return (
      <React.Fragment>
        <div id="facebook-menu">
          {countriesSet.map(country => (
            <button name={country} onClick={this.selectCountry}>{country}</button>
          ))} </div>
        <div id="grid-profile">
          {profiles.map(({ firstName, lastName, country, img, isStudent }) => (
            <div className="profile-mirror" style={{backgroundColor: country === this.state.selectedCountry ? "blue" : undefined}}>
              <img src={img} alt="Student" />
              <div className="profile-infor">
                <p>
                  <span>First Name: </span>
                  {firstName}
                </p>
                <p>
                  <span>Last Name: </span>
                  {lastName}
                </p>
                <p>
                  <span>Country: </span>
                  {country}
                </p>
                <p>
                  <span>Type: </span>
                  {isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }};

export default Facebook;